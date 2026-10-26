/*
 * Google Forms submission and near-live published-feed bridge for the public guestbooks.
 * The form owner controls responder access; publishing it allows link-holders
 * to add responses, while the linked spreadsheet remains private.
 */
(() => {
  'use strict';

  const FORM_RESPONSE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdtpn70yExcl32-Ues3k-OK6yzIT9WU9M8SUqCFqHW7BUnTZA/formResponse';
  const ENTRY = Object.freeze({
    cardId: 'entry.77563571',
    name: 'entry.1102986862',
    relation: 'entry.1939278234',
    message: 'entry.1676260479',
    signature: 'entry.1458349389'
  });
  const CARD_IDS = new Set([
    'botanical-trung-duong-kim-loan-mvm26y7c',
    'hoatinhdo-trung-duong-kim-loan-mvm2htd8',
    'redseal-trung-duong-kim-loan-mvm1r726'
  ]);

  const NOTICE_ID = 'guestbook-live-notice';
  const LOCAL_NOTICE_MS = 5000;
  const HISTORY_NOTICE_MS = 4300;
  const HISTORY_GAP_MS = 6500;
  let noticeNode = null;
  let noticeHideTimer = 0;
  let noticePumpTimer = 0;
  let noticeIsVisible = false;
  let feedInitialized = false;
  let historyCursor = 0;
  const seenEntryIds = new Set();
  const historyEntries = [];
  const historyBySignature = new Map();
  const pendingLocal = new Map();
  const newEntryQueue = [];

  function entrySignature(entry) {
    return [entry.name, entry.relation, entry.message]
      .map(value => String(value || '').trim().toLocaleLowerCase())
      .join('\u0000');
  }

  function addHistoryEntry(entry) {
    const signature = entrySignature(entry);
    const existingIndex = historyBySignature.get(signature);
    if (existingIndex !== undefined) {
      historyEntries[existingIndex] = { ...historyEntries[existingIndex], ...entry };
      return;
    }

    historyBySignature.set(signature, historyEntries.length);
    historyEntries.push(entry);
  }

  function sortHistoryEntries() {
    historyEntries.sort((left, right) => {
      const leftId = Number(left.id);
      const rightId = Number(right.id);
      return (Number.isFinite(leftId) ? leftId : Number.MAX_SAFE_INTEGER) -
        (Number.isFinite(rightId) ? rightId : Number.MAX_SAFE_INTEGER);
    });
    historyBySignature.clear();
    historyEntries.forEach((entry, index) => historyBySignature.set(entrySignature(entry), index));
    if (historyEntries.length) historyCursor %= historyEntries.length;
  }

  function takePendingLocal(signature) {
    const count = pendingLocal.get(signature) || 0;
    if (!count) return false;
    if (count === 1) pendingLocal.delete(signature);
    else pendingLocal.set(signature, count - 1);
    return true;
  }

  function invitationIsOpen() {
    if (document.hidden || !document.body) return false;
    if (document.documentElement.classList.contains('locked') || document.body.classList.contains('locked')) return false;

    for (const overlay of document.querySelectorAll('#cover, #intro-screen, .intro-overlay')) {
      if (overlay.hidden) continue;
      const style = window.getComputedStyle(overlay);
      if (style.display === 'none') continue;
      if (overlay.classList.contains('is-leaving')) {
        if (Number(style.opacity || 1) > 0.02) return false;
        continue;
      }
      if (style.visibility !== 'hidden' && Number(style.opacity || 1) > 0.02) return false;
    }

    return !document.querySelector('main[aria-hidden="true"]');
  }

  function ensureNotice() {
    if (noticeNode?.isConnected) return noticeNode;
    if (!document.body) return null;

    if (!document.getElementById(`${NOTICE_ID}-style`)) {
      const style = document.createElement('style');
      style.id = `${NOTICE_ID}-style`;
      style.textContent = `
        #${NOTICE_ID} {
          position: fixed; z-index: 2147483000; top: calc(env(safe-area-inset-top, 0px) + 14px); left: 50%;
          width: min(420px, calc(100vw - 24px)); box-sizing: border-box; padding: 12px 16px 13px;
          color: #482731; background: rgba(255, 253, 248, .97); border: 1px solid rgba(183, 165, 120, .66);
          border-left: 3px solid #a38b58; border-radius: 15px; box-shadow: 0 12px 34px rgba(57, 30, 34, .16);
          font-family: Georgia, 'Times New Roman', serif; text-align: left; pointer-events: none;
          opacity: 0; visibility: hidden; transform: translate3d(-50%, -12px, 0) scale(.985);
          transition: opacity .32s ease, transform .38s cubic-bezier(.2,.75,.25,1), visibility .32s;
        }
        #${NOTICE_ID}.is-visible { opacity: 1; visibility: visible; transform: translate3d(-50%, 0, 0) scale(1); }
        #${NOTICE_ID} .guestbook-notice-label { display: block; margin-bottom: 4px; color: #967a43; font: 600 9px/1.3 system-ui, sans-serif; letter-spacing: .13em; text-transform: uppercase; }
        #${NOTICE_ID} .guestbook-notice-name { display: block; overflow: hidden; color: #512936; font: 600 15px/1.35 Georgia, 'Times New Roman', serif; text-overflow: ellipsis; white-space: nowrap; }
        #${NOTICE_ID} .guestbook-notice-message { display: -webkit-box; overflow: hidden; margin: 3px 0 0; color: #55464a; font: 13px/1.45 system-ui, sans-serif; overflow-wrap: anywhere; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
        @media (prefers-reduced-motion: reduce) {
          #${NOTICE_ID} { transition: opacity .15s ease, visibility .15s; transform: translateX(-50%); }
          #${NOTICE_ID}.is-visible { transform: translateX(-50%); }
        }
      `;
      (document.head || document.documentElement).appendChild(style);
    }

    const node = document.createElement('aside');
    node.id = NOTICE_ID;
    node.setAttribute('role', 'status');
    node.setAttribute('aria-live', 'polite');
    node.setAttribute('aria-atomic', 'true');
    node.innerHTML = '<span class="guestbook-notice-label"></span><strong class="guestbook-notice-name"></strong><p class="guestbook-notice-message"></p>';
    document.body.appendChild(node);
    noticeNode = node;
    return node;
  }

  function scheduleNoticePump(delay = 0) {
    window.clearTimeout(noticePumpTimer);
    noticePumpTimer = window.setTimeout(pumpNoticeQueue, delay);
  }

  function showNotice(entry, kind) {
    if (!invitationIsOpen()) {
      scheduleNoticePump(1000);
      return;
    }
    const node = ensureNotice();
    if (!node) {
      scheduleNoticePump(500);
      return;
    }

    const label = node.querySelector('.guestbook-notice-label');
    const name = node.querySelector('.guestbook-notice-name');
    const message = node.querySelector('.guestbook-notice-message');
    label.textContent = kind === 'mine' ? 'Lời chúc của bạn' : kind === 'new' ? 'Lời chúc mới' : 'Lời chúc trong sổ lưu bút';
    name.textContent = entry.relation ? `${entry.name} · ${entry.relation}` : entry.name;
    message.textContent = entry.message;
    node.classList.add('is-visible');
    noticeIsVisible = true;

    window.clearTimeout(noticeHideTimer);
    const visibleFor = kind === 'history' ? HISTORY_NOTICE_MS : LOCAL_NOTICE_MS;
    noticeHideTimer = window.setTimeout(() => {
      node.classList.remove('is-visible');
      noticeIsVisible = false;
      scheduleNoticePump(kind === 'history' && !newEntryQueue.length ? HISTORY_GAP_MS : 700);
    }, visibleFor);
  }

  function pumpNoticeQueue() {
    if (noticeIsVisible) return;
    if (document.hidden) {
      scheduleNoticePump(30000);
      return;
    }
    if (!invitationIsOpen()) {
      scheduleNoticePump(1000);
      return;
    }

    const nextNewEntry = newEntryQueue.shift();
    if (nextNewEntry) {
      showNotice(nextNewEntry.entry, nextNewEntry.kind);
      return;
    }

    if (historyEntries.length) {
      const oldEntry = historyEntries[historyCursor % historyEntries.length];
      historyCursor = (historyCursor + 1) % historyEntries.length;
      showNotice(oldEntry, 'history');
      return;
    }

    scheduleNoticePump(15000);
  }

  function receiveFeedEntries(entries) {
    const safeEntries = entries.filter(entry => entry?.name && entry?.message);

    if (!feedInitialized) {
      feedInitialized = true;
      safeEntries.forEach(entry => seenEntryIds.add(String(entry.id || '')));
      safeEntries.slice().reverse().forEach(entry => {
        takePendingLocal(entrySignature(entry));
        addHistoryEntry(entry);
      });
      sortHistoryEntries();
      scheduleNoticePump(8500);
      return;
    }

    const additions = safeEntries.filter(entry => entry.id && !seenEntryIds.has(String(entry.id))).reverse();
    safeEntries.forEach(entry => { if (entry.id) seenEntryIds.add(String(entry.id)); });
    additions.forEach(entry => {
      const isOwn = takePendingLocal(entrySignature(entry));
      addHistoryEntry(entry);
      if (!isOwn) newEntryQueue.push({ entry, kind: 'new' });
    });
    if (additions.length) {
      sortHistoryEntries();
      scheduleNoticePump(0);
    }
  }

  function notifyLocalWish(entry) {
    const signature = entrySignature(entry);
    pendingLocal.set(signature, (pendingLocal.get(signature) || 0) + 1);
    addHistoryEntry(entry);
    newEntryQueue.unshift({ entry, kind: 'mine' });

    if (noticeNode) noticeNode.classList.remove('is-visible');
    noticeIsVisible = false;
    window.clearTimeout(noticeHideTimer);
    scheduleNoticePump(0);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.clearTimeout(noticePumpTimer);
      window.clearTimeout(noticeHideTimer);
      noticeNode?.classList.remove('is-visible');
      noticeIsVisible = false;
    } else {
      scheduleNoticePump(0);
    }
  });

  function load({ cardId, onUpdate, intervalMs = 15000 } = {}) {
    const id = String(cardId || '').trim();
    if (!CARD_IDS.has(id) || typeof onUpdate !== 'function') return () => {};

    let stopped = false;
    let fetching = false;
    let timer = 0;
    let lastPayload = '';

    const schedule = () => {
      if (stopped) return;
      timer = window.setTimeout(refresh, document.hidden ? 60000 : intervalMs);
    };

    const refresh = async () => {
      if (stopped || fetching) return;
      if (document.hidden) { schedule(); return; }
      fetching = true;
      try {
        const query = new URLSearchParams({ cardId: id });
        const response = await fetch(`/api/guestbook?${query}`, {
          cache: 'no-store',
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('Guestbook feed unavailable');
        const payload = await response.json();
        if (!payload?.ok || !Array.isArray(payload.entries)) throw new Error('Invalid guestbook feed');
        const serialized = JSON.stringify(payload.entries);
        if (serialized !== lastPayload) {
          lastPayload = serialized;
          receiveFeedEntries(payload.entries);
          onUpdate(payload.entries);
        }
      } catch (_) {
        // Keep the invitation usable when the public feed is temporarily unavailable.
      } finally {
        fetching = false;
        schedule();
      }
    };

    const onVisibility = () => {
      if (!document.hidden) {
        window.clearTimeout(timer);
        refresh();
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    refresh();
    return () => {
      stopped = true;
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }

  function submit({ cardId, name, relation = '', message, signature = '' } = {}) {
    const values = {
      cardId: String(cardId || '').trim(),
      name: String(name || '').trim().slice(0, 80),
      relation: String(relation || '').trim().slice(0, 80),
      message: String(message || '').trim().slice(0, 1000),
      signature: String(signature || '').trim().slice(0, 500)
    };

    if (!CARD_IDS.has(values.cardId) || !values.name || !values.message) return false;

    const token = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const targetName = `wedding-guestbook-${token}`;
    const frame = document.createElement('iframe');
    frame.name = targetName;
    frame.title = 'Gửi lời chúc vào sổ lưu bút';
    frame.hidden = true;
    frame.setAttribute('aria-hidden', 'true');

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = FORM_RESPONSE_URL;
    form.target = targetName;
    form.acceptCharset = 'UTF-8';
    form.hidden = true;

    for (const [field, name] of Object.entries(ENTRY)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = values[field];
      form.appendChild(input);
    }

    document.body.append(frame, form);
    form.submit();
    notifyLocalWish({ name: values.name, relation: values.relation, message: values.message });
    window.setTimeout(() => {
      form.remove();
      frame.remove();
    }, 60_000);
    return true;
  }

  window.WeddingGuestbook = Object.freeze({ submit, load });
})();
