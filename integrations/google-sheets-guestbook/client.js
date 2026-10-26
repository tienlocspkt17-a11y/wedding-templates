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
    window.setTimeout(() => {
      form.remove();
      frame.remove();
    }, 60_000);
    return true;
  }

  window.WeddingGuestbook = Object.freeze({ submit, load });
})();
