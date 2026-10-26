// everafter core: renders a wedding website from a WeddingWebsiteConfig (data/wedding.json).
// Styles register their intro with EA.cover(fn) and their module layouts with EA.section(id, fn[, variant]).
(function () {
  const params = new URLSearchParams(location.search);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DOW = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const DRAFT_KEY = 'everafter:draft';
  // Older section names used by style layouts → module ids.
  const ALIAS = { letter: 'invitation', announce: 'families', itinerary: 'schedule', notes: 'dressCode' };

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const safeInvitationUrl = (attributeName, value) => {
    const candidate = String(value || '').trim();
    if (!candidate) return true;
    if (/^(?:javascript|vbscript):/i.test(candidate)) return false;
    if (/^data:/i.test(candidate)) return attributeName === 'src' && /^data:image\/(?:png|jpeg|gif|webp);/i.test(candidate);
    if (/^(?:blob|file):/i.test(candidate)) return false;
    return true;
  };
  const sanitizeCustomHTML = value => {
    const raw = String(value || '').slice(0, 2000000);
    if (!raw) return '';
    const holder = document.createElement('template');
    holder.innerHTML = raw;
    holder.content.querySelectorAll('script, iframe, object, embed, base, meta, link, style').forEach(node => node.remove());
    holder.content.querySelectorAll('form').forEach(node => {
      node.removeAttribute('action');
      node.removeAttribute('target');
    });
    holder.content.querySelectorAll('*').forEach(node => [...node.attributes].forEach(attribute => {
      const name = attribute.name.toLowerCase();
      const attributeValue = attribute.value;
      if (name.startsWith('on') || ['srcdoc', 'srcset', 'formaction', 'ping'].includes(name)) {
        node.removeAttribute(attribute.name);
        return;
      }
      if (['href', 'src', 'action', 'poster', 'background', 'cite', 'xlink:href'].includes(name)
        && !safeInvitationUrl(name, attributeValue)) {
        node.removeAttribute(attribute.name);
        return;
      }
      if (name === 'style' && /(?:url\s*\(|expression\s*\(|@import|javascript:|-moz-binding)/i.test(attributeValue)) {
        node.removeAttribute(attribute.name);
      }
    }));
    return holder.innerHTML.slice(0, 2000000);
  };
  const load = (tag, attrs) => new Promise((ok, fail) => {
    const el = Object.assign(document.createElement(tag), attrs, { onload: ok, onerror: fail });
    document.head.appendChild(el);
  });
  const readJSON = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const writeJSON = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* storage unavailable */ } };

  let builder = null, ctx = null;
  const layouts = {}; // layouts[moduleId][variant] = fn
  window.EA = {
    cover(fn) { builder = fn; },
    section(name, fn, variant = 'signature') {
      const id = ALIAS[name] || name;
      (layouts[id] ||= {})[variant] = fn;
    },
    // Storage adapter for RSVP / guestbook / registry picks. Replace with an API call when integrating.
    async store(kind, payload) {
      const list = readJSON(`everafter:${kind}`, []);
      list.push({ ...payload, at: new Date().toISOString() });
      writeJSON(`everafter:${kind}`, list);
      return { ok: true };
    },
    list: kind => readJSON(`everafter:${kind}`, []),
    // Start background music from a template's own "open" control (must be called from a guest action).
    music: () => music.start(),
    // Run code after the page has rendered (templates wiring their own widgets).
    afterRender(fn) { afterFns.push(fn); }
  };
  const afterFns = [];

  // ?c=name loads data/name.json (letters, digits and dashes only), so each family can keep its own file.
  const cfgName = /^[a-z0-9-]{1,40}$/.test(params.get('c') || '') ? params.get('c') : 'wedding';
  const offline = params.get('offline') === '1';
  let bundledConfig = null;
  if (offline) {
    try {
      const decoded = JSON.parse(params.get('config') || 'null');
      if (decoded && typeof decoded === 'object' && !Array.isArray(decoded)) {
        bundledConfig = decoded;
      }
    } catch {}
  }
  const configP = offline
    ? (bundledConfig
      ? Promise.resolve(bundledConfig)
      : Promise.reject(new Error('Missing bundled invitation configuration.')))
    : (params.get('draft') && readJSON(DRAFT_KEY, null)
      ? Promise.resolve(readJSON(DRAFT_KEY, null))
      : fetch(`data/${cfgName}.json`).then(r => r.json()));

  // ?custom=<card id>: a card saved by customize.html — shared copy on the server (Vercel), else this browser's copy
  let customHTML = null;
  let customCoverHTML = null;
  const cardId = /^[a-z0-9-]{1,40}$/.test(params.get('custom') || '') ? params.get('custom') : null;
  const customP = !offline && cardId
    ? fetch(`api/store?k=card&id=${cardId}`, { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null)
    : Promise.resolve(null);

  configP.then(config => {
    const style = EA_STYLES.find(s => s.id === (params.get('style') || config.templateId)) || EA_STYLES[0];
    const assetVersion = params.get('assetVersion');
    const assetSuffix = assetVersion ? `?v=${encodeURIComponent(assetVersion)}` : '';
    document.documentElement.dataset.style = style.id;
    load('link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?${style.fonts}&display=swap` }).catch(() => {});
    return Promise.all([
      config,
      load('link', { rel: 'stylesheet', href: `styles/${style.id}/style.css${assetSuffix}` }).catch(() => {}),
      load('link', { rel: 'stylesheet', href: '../interaction.css' }).catch(() => {}),
      load('script', { src: `styles/${style.id}/style.js${assetSuffix}` }),
      customP.then(card => {
        const localCard = cardId && readJSON(`everafter:card:${cardId}`, null);
        const value = card ?? localCard;
        const rawHTML = typeof value === 'string' ? value : value?.customHTML || '';
        customHTML = sanitizeCustomHTML(rawHTML) || null;
      })
    ]);
  }).then(([config]) => {
    ctx = makeCtx(config);
    applyTheme(config.themeOverrides || {});
    render(ctx);
    document.title = config.siteSettings?.title || `${config.couple.brideName} & ${config.couple.groomName}`;
    document.documentElement.lang = config.siteSettings?.language || 'vi';
    document.body.classList.add('ready');
    setupMusic(config.music);
    if (builder && config.intro?.enabled !== false) showCover();
    else afterOpen();
  }).catch(err => {
    console.error(err);
    document.body.classList.add('ready');
    // Opened by double-clicking the file: browsers block reading data/*.json from file://
    const msg = location.protocol === 'file:'
      ? `<div class="load-error"><b>Thiệp cần được mở qua server, không mở trực tiếp file.</b><br><br>
         Mac: bấm đúp <code>start-mac.command</code> (hoặc mở Terminal trong thư mục này và chạy <code>python3 serve.py</code>).<br>
         Windows: bấm đúp <code>start-windows.bat</code>.<br><br>
         Sau đó mở <code>http://localhost:5173</code> trong trình duyệt.</div>`
      : '<p class="load-error">Không tải được thiệp. Vui lòng thử lại.</p>';
    document.body.insertAdjacentHTML('afterbegin', msg);
  });

  function applyTheme(t) {
    const root = document.documentElement.style;
    Object.entries(t.colors || {}).forEach(([k, v]) => root.setProperty(`--${k}`, v));
    if (t.fonts?.display) root.setProperty('--f-display', t.fonts.display);
    if (t.fonts?.body) root.setProperty('--f-body', t.fonts.body);
    if (t.spacing === 'compact') root.setProperty('--sec-pad', 'clamp(48px, 8vw, 88px)');
    if (t.spacing === 'airy') root.setProperty('--sec-pad', 'clamp(80px, 14vw, 168px)');
  }

  // ---------- context: config + a flat view that style layouts read as `data` ----------
  function makeCtx(config) {
    const mods = Object.fromEntries(config.modules.map(m => [m.id, m]));
    const C = id => mods[id]?.content || {};
    const cp = config.couple;
    const inv = C('invitation');
    const guest = (params.get('to') || '').trim().slice(0, 60) || inv.defaultGuest || 'Quý khách';
    const [y, m, d] = cp.weddingDate.split('-');
    const day = new Date(`${cp.weddingDate}T12:00:00+07:00`);
    const people = C('contact').people || [];
    // Family side: events may carry side "bride" | "groom"; guests of one side only see theirs.
    const side = ['bride', 'groom'].includes(params.get('side')) ? params.get('side') : 'all';
    const allEvents = C('events').events || [];
    const events = allEvents.filter(ev => side === 'all' || !ev.side || ev.side === 'both' || ev.side === side);
    const data = {
      bride: { name: cp.brideName, short: cp.brideShortName, phone: people[0]?.phone || '' },
      groom: { name: cp.groomName, short: cp.groomShortName, phone: people[1]?.phone || '' },
      monogram: cp.monogram,
      date: cp.weddingDate,
      defaultGuest: inv.defaultGuest,
      letter: inv.paragraphs || [],
      letterHighlight: inv.highlight || '',
      brideFamily: C('families').brideFamily || {},
      groomFamily: C('families').groomFamily || {},
      announceNote: C('families').note || '',
      events,
      hasSides: allEvents.some(ev => ev.side === 'bride' || ev.side === 'groom'),
      photos: C('gallery').photos || [],
      itinerary: C('schedule').items || [],
      dressCode: C('dressCode').colors || [],
      notes: C('dressCode').notes || [],
      faq: C('faq').items || [],
      quote: C('quote').text || '',
      thanks: C('thanks').text || '',
      loveStoryUrl: ''
    };
    const c = {
      config, data, guest, esc, reduced, mods, side,
      y, m, d,
      dateText: `${d} · ${m} · ${y}`,
      dow: DOW[day.getUTCDay()],
      mod: null, // the module being rendered
      // Personalise text: {guestName} → the guest from the link.
      t: s => esc(String(s ?? '').replaceAll('{guestName}', guest)),
      after: (ms, fn) => setTimeout(fn, reduced ? 0 : ms)
    };
    c.ui = helpers(c);
    return c;
  }

  // ---------- intro cover ----------
  const cover = document.getElementById('cover');
  const main = document.getElementById('inv');

  function showCover() {
    cover.innerHTML = '';
    cover.hidden = false;
    cover.classList.remove('is-leaving');
    document.documentElement.classList.add('locked');
    main.setAttribute('aria-hidden', 'true');
    if (customCoverHTML) cover.innerHTML = customCoverHTML;
    else builder(cover, ctx, openInvitation);
    const label = ctx.config.intro?.buttonLabel;
    const btn = cover.querySelector('.open-btn');
    if (label && btn) btn.textContent = label;
    if (customCoverHTML) btn?.addEventListener('click', openInvitation, { once: true });
    btn?.addEventListener('click', () => music.start(), { once: true });
    btn?.focus({ preventScroll: true });
  }

  function openInvitation() {
    main.removeAttribute('aria-hidden');
    cover.classList.add('is-leaving');
    document.documentElement.classList.remove('locked');
    window.scrollTo(0, 0);
    ctx.after(700, () => { cover.hidden = true; });
    afterOpen();
  }

  function afterOpen() { document.getElementById('dock')?.removeAttribute('hidden'); }

  // ---------- music: only ever starts from a guest action ----------
  const music = { start() {} };
  function setupMusic(cfg) {
    const dock = document.getElementById('dock');
    const btn = document.getElementById('music-btn');
    const vol = document.getElementById('music-vol');
    if (!cfg?.enabled || !cfg.source) { btn.hidden = true; vol.hidden = true; return; }
    const audio = new Audio(cfg.source);
    audio.loop = true;
    audio.preload = 'none';
    const muted = readJSON('everafter:muted', false);
    vol.value = cfg.volume ?? 0.4;
    const sync = () => {
      const on = !audio.paused;
      btn.setAttribute('aria-pressed', on);
      btn.setAttribute('aria-label', on ? 'Tắt nhạc' : 'Bật nhạc');
      dock.classList.toggle('playing', on);
    };
    const play = () => {
      audio.volume = 0;
      audio.play().then(() => {
        // fade in instead of blasting at full volume
        const target = +vol.value, step = target / 20;
        const iv = setInterval(() => { audio.volume = Math.min(target, audio.volume + step); if (audio.volume >= target) clearInterval(iv); }, 60);
      }).catch(() => {}).finally(sync);
    };
    audio.addEventListener('error', () => { btn.hidden = true; vol.hidden = true; });
    audio.addEventListener('pause', sync);
    btn.addEventListener('click', () => {
      if (audio.paused) { play(); writeJSON('everafter:muted', false); }
      else { audio.pause(); writeJSON('everafter:muted', true); }
    });
    vol.addEventListener('input', () => { audio.volume = +vol.value; });
    music.start = () => { if (cfg.autoplayAfterOpen && !muted) play(); };
  }

  // ---------- shared building blocks (c.ui) ----------
  function helpers(c) {
    const { data: D, esc: e } = c;
    return {
      calUrl(ev) {
        const s = `${c.y}${c.m}${c.d}T${ev.time.replace(':', '')}00`;
        const endH = String(Math.min(23, +ev.time.slice(0, 2) + (ev.hours || 2))).padStart(2, '0');
        const end = `${c.y}${c.m}${c.d}T${endH}${ev.time.slice(3)}00`;
        const q = new URLSearchParams({
          action: 'TEMPLATE', text: `${ev.title} — ${D.bride.short} & ${D.groom.short}`,
          dates: `${s}/${end}`, ctz: 'Asia/Ho_Chi_Minh', location: `${ev.place}, ${ev.address}`
        });
        return `https://calendar.google.com/calendar/render?${q}`;
      },
      mapUrl(ev) {
        const custom = String(ev.mapUrl || '').trim();
        try {
          const url = new URL(custom);
          if (url.protocol === 'https:' && ['maps.app.goo.gl', 'maps.google.com', 'www.google.com'].includes(url.hostname)) return e(url.href);
        } catch {}
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ev.place}, ${ev.address}`)}`;
      },
      // Section header. Module content `eyebrow` / `title` / `sub` override the layout's defaults.
      head(eyebrow, title, sub) {
        const mc = c.mod?.content || {};
        const eb = mc.eyebrow != null ? e(mc.eyebrow) : eyebrow;
        const ti = mc.title != null ? e(mc.title) : title;
        const su = mc.sub != null ? e(mc.sub) : sub;
        return `<header class="head">
          <p class="eyebrow">${eb}</p>
          <h2 class="title">${ti}</h2>
          ${su ? `<p class="sub">${su}</p>` : ''}
        </header>`;
      },
      family: (label, f) => `
        <div class="fam">
          <p class="label">${e(f.label || label)}</p>
          <p>Ông ${e(f.father)}</p>
          <p>Bà ${e(f.mother)}</p>
          ${f.address ? `<p class="addr">${e(f.address)}</p>` : ''}
        </div>`,
      // Core fills every `.countdown .n`: days, hours, minutes, seconds.
      countdown: () => `
        <div class="countdown" role="timer" aria-label="Đếm ngược đến ngày cưới">
          ${['Ngày', 'Giờ', 'Phút', 'Giây'].map(u => `<div><span class="n">00</span><span class="u">${u}</span></div>`).join('')}
        </div>`,
      actions(ev) {
        return `<div class="actions">
          <a class="btn" href="${this.mapUrl(ev)}" target="_blank" rel="noopener">Chỉ đường</a>
          <a class="btn ghost" href="${this.calUrl(ev)}" target="_blank" rel="noopener">Thêm vào lịch</a>
        </div>`;
      },
      // Core opens the lightbox for any `.photo[data-i]` (index into gallery photos).
      photo: (p, i, extra = '') => `
        <button class="photo" type="button" data-i="${i}" aria-label="Xem ảnh: ${e(p.caption)}">
          <img src="${e(p.src)}" alt="" loading="lazy" decoding="async">
          <span class="cap">${e(p.caption)}</span>${extra}
        </button>`,
      evDate: ev => `${e(ev.time)} · ${c.dow}, ${c.d}/${c.m}/${c.y}`,
      // RSVP form; core wires `form.rsvp-form`. Styles may wrap it in any layout.
      rsvpForm() {
        const r = c.mods.rsvp?.content || {};
        const max = r.maxGuests ?? 4;
        return `<form class="rsvp-form" novalidate>
          <label class="field"><span>Tên của bạn</span>
            <input name="name" autocomplete="name" required value="${c.guest === (D.defaultGuest || 'Quý khách') ? '' : e(c.guest)}" placeholder="Nguyễn Minh Anh"></label>
          <fieldset class="field choice"><legend>Bạn sẽ tham dự chứ?</legend>
            <label><input type="radio" name="attending" value="yes" required> Mình sẽ đến</label>
            <label><input type="radio" name="attending" value="no"> Tiếc quá, mình không đến được</label>
          </fieldset>
          <label class="field when-yes"><span>Số người đi cùng (không tính bạn)</span>
            <select name="plus">${Array.from({ length: max + 1 }, (_, i) => `<option value="${i}">${i}</option>`).join('')}</select></label>
          ${D.events.length > 1 ? `<fieldset class="field choice when-yes"><legend>Bạn dự phần nào?</legend>
            ${D.events.map((ev, i) => `<label><input type="checkbox" name="events" value="${i}" checked> ${e(ev.title)} · ${e(ev.time)}</label>`).join('')}
          </fieldset>` : ''}
          <label class="field"><span>Lời nhắn (không bắt buộc)</span>
            <textarea name="note" rows="3" maxlength="500" placeholder="Ăn chay, dị ứng, hay một lời chúc nhỏ…"></textarea></label>
          <p class="form-error" role="alert" hidden></p>
          <button class="btn" type="submit">Gửi phản hồi</button>
          ${r.deadline ? `<p class="fine">${e(r.deadline)}</p>` : ''}
        </form>
        <div class="form-done" hidden role="status"></div>`;
      },
      // Guestbook form + wishes; core wires `form.wish-form` and fills `.wish-list`.
      wishForm() {
        return `<form class="wish-form" novalidate>
          <label class="field"><span>Tên của bạn</span><input name="name" required maxlength="60" autocomplete="name"></label>
          <label class="field"><span>Lời chúc</span><textarea name="message" rows="3" required maxlength="400"></textarea></label>
          <p class="form-error" role="alert" hidden></p>
          <p class="form-status" role="status" hidden></p>
          <button class="btn" type="submit">Gửi lời chúc</button>
        </form>`;
      }
    };
  }

  // ---------- default layouts ("classic" variant) ----------
  const M = {
    hero: c => {
      const { config: { couple: cp }, esc: e, ui } = c;
      const mc = c.mod.content;
      return `<div class="wrap">
        <div class="hero-grid">
          <div class="hero-img"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></div>
          <div class="hero-txt">
            <p class="eyebrow">${e(mc.eyebrow || 'Save our date')}</p>
            <h1 class="couple"><span>${e(cp.brideName)}</span><span class="amp">&amp;</span><span>${e(cp.groomName)}</span></h1>
            <p class="headline">${c.t(cp.headline)}</p>
            <p class="hero-date">${c.dow} · ${c.dateText}${cp.city ? ` · ${e(cp.city)}` : ''}</p>
            ${cp.lunarDate ? `<p class="lunar">${e(cp.lunarDate)}</p>` : ''}
            ${mc.showCountdown !== false ? ui.countdown() : ''}
          </div>
        </div>
      </div>`;
    },

    invitation: ({ data: D, esc: e, mod, t, dateText }) => `<div class="wrap narrow">
      <p class="kicker">${dateText}</p>
      <p class="salute">${t(mod.content.greeting || 'Gửi {guestName},')}</p>
      <h2 class="display">${e(mod.content.title || 'Một lời mời từ chúng mình')}</h2>
      <div class="rule" aria-hidden="true"></div>
      ${D.letter.slice(0, 2).map(p => `<p>${t(p)}</p>`).join('')}
      <p class="highlight">${t(D.letterHighlight)}</p>
      ${D.letter.slice(2).map(p => `<p>${t(p)}</p>`).join('')}
      <p class="sign">Thân mến,<br><span class="names">${e(D.bride.name)} <span class="amp">&amp;</span> ${e(D.groom.name)}</span></p>
    </div>`,

    families: ({ data: D, esc: e, ui, dow, d, m, y, mod }) => `<div class="wrap">
      <div class="families">
        ${ui.family('Nhà gái', D.brideFamily)}
        <div class="mono" aria-hidden="true">${e(D.monogram)}</div>
        ${ui.family('Nhà trai', D.groomFamily)}
      </div>
      <p class="kicker">${e(mod.content.kicker || 'Trân trọng báo tin lễ thành hôn của')}</p>
      <h2 class="couple"><span>${e(D.bride.name)}</span><span class="amp">&amp;</span><span>${e(D.groom.name)}</span></h2>
      <p class="note">${e(D.announceNote)}</p>
      <div class="datebox">
        <span class="dow">${dow}</span>
        <span class="day">${d}</span>
        <span class="my">Tháng ${+m} · ${y}</span>
      </div>
    </div>`,

    story: ({ esc: e, ui, mod }) => {
      const s = mod.content;
      return `<div class="wrap">
        ${ui.head('Love story', 'Chuyện của chúng mình')}
        <ol class="story-line">
          ${(s.chapters || []).map(ch => `
            <li class="chapter">
              ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
              <div><p class="label">${e(ch.date)}</p><h3>${e(ch.title)}</h3><p>${e(ch.text)}</p></div>
            </li>`).join('')}
        </ol>
        ${s.quote ? `<p class="story-quote">${e(s.quote)}</p>` : ''}
      </div>`;
    },

    events: ({ data: D, esc: e, ui }) => `<div class="wrap">
      ${ui.head('Save the date', 'Ngày chúng mình thành đôi')}
      <div class="event-grid">
        ${D.events.map((ev, i) => `
          <article class="event">
            <p class="num">${String(i + 1).padStart(2, '0')}</p>
            <p class="label">${e(ev.label)}</p>
            <h3>${e(ev.title)}</h3>
            <dl>
              <dt>Thời gian</dt><dd>${ui.evDate(ev)}</dd>
              <dt>Địa điểm</dt><dd>${e(ev.place)}</dd>
              <dt>Địa chỉ</dt><dd>${e(ev.address)}</dd>
            </dl>
            ${ev.lunar ? `<p class="lunar">${e(ev.lunar)}</p>` : ''}
            ${ui.actions(ev)}
          </article>`).join('')}
      </div>
    </div>`,

    schedule: ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
      ${ui.head('Wedding itinerary', 'Một ngày thật vui')}
      <ol class="timeline">
        ${D.itinerary.map(it => `<li><time>${e(it.time)}</time><div><strong>${e(it.title)}</strong><span>${e(it.note)}</span></div></li>`).join('')}
      </ol>
    </div>`,

    saveDate: c => {
      const { ui, esc: e, mod, y, m, d, data: D } = c;
      const first = new Date(Date.UTC(+y, +m - 1, 1)).getUTCDay(); // 0 = Sunday
      const days = new Date(Date.UTC(+y, +m, 0)).getUTCDate();
      const lead = (first + 6) % 7; // Monday-first grid
      const cells = [...Array(lead).fill(''), ...Array.from({ length: days }, (_, i) => i + 1)];
      return `<div class="wrap narrow">
        ${ui.head('Save the date', 'Đánh dấu lịch nhé')}
        <div class="cal" role="table" aria-label="Tháng ${+m} năm ${y}">
          <p class="cal-title">Tháng ${+m} · ${y}</p>
          <div class="cal-grid" role="rowgroup">
            ${['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(w => `<span class="w" role="columnheader">${w}</span>`).join('')}
            ${cells.map(n => `<span class="${n === +d ? 'on' : ''}"${n === +d ? ' aria-current="date"' : ''}>${n}</span>`).join('')}
          </div>
        </div>
        ${ui.countdown()}
        ${mod.content.note ? `<p class="sub">${e(mod.content.note)}</p>` : ''}
        <div class="actions center">
          <a class="btn" href="${ui.calUrl(D.events[D.events.length - 1] || { time: '18:00', title: '', place: '', address: '' })}" target="_blank" rel="noopener">Google Calendar</a>
          <button class="btn ghost" type="button" data-ics>Tải file .ics</button>
        </div>
      </div>`;
    },

    party: ({ esc: e, ui, mod }) => `<div class="wrap">
      ${ui.head('Wedding party', 'Những người đồng hành')}
      <div class="party-grid">
        ${(mod.content.people || []).map(p => `
          <figure class="member">
            <img src="${e(p.image)}" alt="" loading="lazy">
            <figcaption><p class="label">${e(p.role)}</p><p class="pname">${e(p.name)}</p><p class="pnote">${e(p.note)}</p></figcaption>
          </figure>`).join('')}
      </div>
    </div>`,

    video: ({ esc: e, ui, mod }) => `<div class="wrap">
      ${ui.head('Wedding film', 'Thước phim của chúng mình')}
      <div class="video-frame" data-embed="${e(mod.content.embedUrl || '')}">
        <img src="${e(mod.content.poster)}" alt="" loading="lazy">
        <button class="play" type="button" aria-label="Phát video"><span aria-hidden="true">▶</span></button>
        <p class="video-soon" hidden>Video sẽ sớm được cập nhật.</p>
      </div>
      ${mod.content.caption ? `<p class="fine">${e(mod.content.caption)}</p>` : ''}
    </div>`,

    gallery: ({ data: D, ui }) => `<div class="wrap">
      ${ui.head('A glimpse of us', 'Khoảnh khắc của chúng mình')}
      <div class="photos">${D.photos.map((p, i) => ui.photo(p, i)).join('')}</div>
    </div>`,

    dressCode: ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
      ${ui.head('Dress code &amp; notes', 'Một chút lưu ý')}
      <ul class="swatches">
        ${D.dressCode.map(s => `<li><span class="dot" style="background:${e(s.color)}"></span>${e(s.name)}</li>`).join('')}
      </ul>
      <ul class="notelist">${D.notes.map(n => `<li>${e(n)}</li>`).join('')}</ul>
    </div>`,

    faq: ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
      ${ui.head('Wedding guide', 'Một vài điều cần biết')}
      ${D.faq.map(f => `<details><summary>${e(f.q)}</summary><p>${e(f.a)}</p></details>`).join('')}
    </div>`,

    quote: ({ data: D, esc: e, mod }) => `<div class="wrap narrow">
      <p class="eyebrow">${e(mod.content.eyebrow || 'A note from us')}</p>
      <blockquote>${e(D.quote)}</blockquote>
    </div>`,

    rsvp: ({ ui }) => `<div class="wrap narrow">
      ${ui.head('RSVP', 'Bạn sẽ đến chứ?')}
      <div class="rsvp-card">${ui.rsvpForm()}</div>
    </div>`,

    gift: ({ esc: e, ui, mod }) => `<div class="wrap">
      ${ui.head('Mừng cưới', 'Hộp mừng cưới')}
      ${mod.content.message ? `<p class="sub gift-msg">${e(mod.content.message)}</p>` : ''}
      <div class="accounts">
        ${(mod.content.accounts || []).map(a => `
          <article class="account">
            <p class="label">${e(a.role)}</p>
            ${a.qr ? `<img class="qr" src="${e(a.qr)}" alt="Mã QR chuyển khoản ${e(a.bank)}" loading="lazy">`
                   : `<div class="qr qr-demo" role="img" aria-label="Mã QR mẫu, cần thay bằng mã thật">${qrDemo(a.number)}<span>QR mẫu</span></div>`}
            <p class="bank">${e(a.bank)}</p>
            <p class="acc-no">${e(a.number)}</p>
            <p class="owner">${e(a.owner)}</p>
            <button class="btn ghost" type="button" data-copy="${e(a.number.replace(/\s/g, ''))}">Sao chép số tài khoản</button>
          </article>`).join('')}
      </div>
    </div>`,

    registry: ({ esc: e, ui, mod }) => `<div class="wrap">
      ${ui.head('Gift registry', 'Gợi ý quà tặng')}
      ${mod.content.note ? `<p class="sub">${e(mod.content.note)}</p>` : ''}
      <div class="gifts">
        ${(mod.content.items || []).map((g, i) => `
          <article class="gift-item">
            <img src="${e(g.image)}" alt="" loading="lazy">
            <h3>${e(g.name)}</h3>
            <p class="price">${e(g.price)}</p>
            <button class="btn ghost" type="button" data-pick="${i}">Mình chọn món này</button>
            ${g.link ? `<a class="fine" href="${e(g.link)}" target="_blank" rel="noopener">Xem sản phẩm ↗</a>` : ''}
          </article>`).join('')}
      </div>
    </div>`,

    guestbook: ({ esc: e, ui, mod }) => `<div class="wrap narrow">
      ${ui.head('Guestbook', 'Sổ lưu bút')}
      ${mod.content.prompt ? `<p class="sub">${e(mod.content.prompt)}</p>` : ''}
      <div class="book">${ui.wishForm()}<ul class="wish-list"></ul></div>
    </div>`,

    contact: ({ esc: e, ui, mod }) => `<div class="wrap">
      ${ui.head('Contact', 'Chúng mình luôn ở đây')}
      <div class="contacts">
        ${(mod.content.people || []).map(p => `
          <div class="person">
            <p class="label">${e(p.role)}</p>
            <p class="pname">${e(p.name)}</p>
            <a class="btn" href="tel:${e(p.phone.replace(/\s/g, ''))}">${e(p.phone)}</a>
          </div>`).join('')}
      </div>
    </div>`,

    // Keep a button with id="reopen" in custom layouts.
    thanks: ({ data: D, esc: e, dateText, mod }) => `<div class="wrap narrow">
      ${mod.content.image ? `<img class="thanks-img" src="${e(mod.content.image)}" alt="" loading="lazy">` : ''}
      <p class="eyebrow">${e(mod.content.eyebrow || 'Thank you')}</p>
      <p class="mono">${e(D.monogram)}</p>
      <p>${e(D.thanks)}</p>
      ${mod.content.signature ? `<p class="signature">${e(mod.content.signature)}</p>` : ''}
      <p class="kicker">${dateText}</p>
      <div class="actions center">
        <button class="btn" type="button" id="reopen">Mở lại tấm thiệp ↺</button>
        <a class="btn ghost" href="#top">${e(mod.content.backToTop || 'Về đầu trang ↑')}</a>
      </div>
    </div>`
  };

  // A decorative QR-like pattern so the layout looks finished before a real QR is uploaded.
  function qrDemo(seed) {
    let h = 0; for (const ch of String(seed)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const cells = [];
    for (let i = 0; i < 21 * 21; i++) { h = (h * 1103515245 + 12345) >>> 0; if (h & 0x40000) cells.push(`<rect x="${i % 21}" y="${Math.floor(i / 21)}" width="1" height="1"/>`); }
    const eye = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7" fill="#fff"/><rect x="${x}" y="${y}" width="7" height="7" fill="none" stroke="currentColor"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;
    return `<svg viewBox="-1 -1 23 23" aria-hidden="true"><rect x="-1" y="-1" width="23" height="23" fill="#fff"/><g fill="currentColor">${cells.join('')}${eye(0, 0)}${eye(14, 0)}${eye(0, 14)}</g></svg>`;
  }

  // ---------- render ----------
  function pick(mod) {
    const own = layouts[mod.id] || {};
    const v = mod.variant || 'auto';
    if (v === 'classic') return M[mod.id];
    if (v !== 'auto' && own[v]) return own[v];
    return own.signature || M[mod.id];
  }

  function copySnapshotNode(target, source) {
    if (!target || !source) return;
    [...target.attributes].forEach(attribute => target.removeAttribute(attribute.name));
    [...source.attributes].forEach(attribute => target.setAttribute(attribute.name, attribute.value));
    target.innerHTML = source.innerHTML;
  }

  function parseCustomSnapshot(raw) {
    const holder = document.createElement('template');
    holder.innerHTML = String(raw || '');
    const snapshot = holder.content.querySelector('[data-everafter-snapshot="2"]');
    if (!snapshot) return null;
    const mainSlot = snapshot.querySelector(':scope > [data-everafter-main]');
    const slots = [...snapshot.querySelectorAll(':scope > [data-everafter-chrome] > [data-everafter-slot]')]
      .map(slot => ({ name: slot.dataset.everafterSlot || '', node: slot.firstElementChild }))
      .filter(item => item.node);
    return { mainHTML: mainSlot?.innerHTML || '', slots };
  }

  function snapshotTarget(name) {
    if (name === 'navigation') return document.querySelector('.journey-nav, #dock, .dock');
    if (name === 'sides') return document.querySelector('.sides');
    return null;
  }

  function applyCustomSnapshot(raw) {
    const parsed = parseCustomSnapshot(raw);
    if (!parsed) return null;
    main.innerHTML = parsed.mainHTML;
    const opening = parsed.slots.find(item => item.name === 'opening' && item.node?.id === 'cover');
    customCoverHTML = opening?.node?.innerHTML || null;
    return parsed;
  }

  function applyCustomChrome(parsed) {
    parsed?.slots.forEach(item => {
      if (item.name === 'opening') return;
      const target = snapshotTarget(item.name);
      if (target) copySnapshotNode(target, item.node);
    });
  }

  function render(c) {
    const mods = c.config.modules.filter(m => m.enabled !== false && (M[m.id] || layouts[m.id])).sort((a, b) => a.order - b.order);
    main.innerHTML = mods.map(mod => {
      c.mod = mod;
      const fn = pick(mod);
      const custom = fn !== M[mod.id];
      // original section class names keep older style CSS working; new modules only get m-<id>
      const legacy = { invitation: 'letter', families: 'announce', schedule: 'itinerary', dressCode: 'notes',
        events: 'events', gallery: 'gallery', faq: 'faq', quote: 'quote', contact: 'contact', thanks: 'thanks' }[mod.id] || '';
      return `<section id="${mod.id}" class="sec m-${mod.id} ${legacy}${custom ? ' custom' : ''}">${fn(c)}</section>`;
    }).join('');
    // ?custom=<card id>: use the card saved by customize.html (edited text,
    // moved/removed parts, and the complete visual snapshot when available).
    const customSnapshot = customHTML ? applyCustomSnapshot(customHTML) : null;
    if (customHTML && !customSnapshot) main.innerHTML = customHTML;
    c.mod = null;
    buildDock(mods);
    applyCustomChrome(customSnapshot);
    wire(c);
  }

  function buildDock(mods) {
    const nav = document.getElementById('dock-nav');
    const want = [['events', 'Sự kiện'], ['rsvp', 'RSVP'], ['gift', 'Mừng cưới'], ['gallery', 'Ảnh']];
    nav.innerHTML = want.filter(([id]) => mods.some(m => m.id === id)).map(([id, l]) => `<a href="#${id}">${l}</a>`).join('');
    // "Chung · Nhà trai · Nhà gái" switch, only when events are split by family side
    if (!ctx.data.hasSides) return;
    const link = s => { const p = new URLSearchParams(location.search); s === 'all' ? p.delete('side') : p.set('side', s); return `?${p}`; };
    document.getElementById('dock').insertAdjacentHTML('beforebegin', `<nav class="sides" aria-label="Xem theo nhà">
      ${[['all', 'Chung'], ['groom', 'Nhà trai'], ['bride', 'Nhà gái']].map(([s, l]) => `<a href="${link(s)}"${ctx.side === s ? ' aria-current="page"' : ''}>${l}</a>`).join('')}
    </nav>`);
  }

  function wire(c) {
    const D = c.data;
    // countdown to the first event
    const target = new Date(`${D.date}T${D.events[0]?.time || '00:00'}:00+07:00`);
    const nums = main.querySelectorAll('.countdown .n');
    const tick = () => {
      const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const parts = [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
      nums.forEach((n, i) => { n.textContent = String(parts[i % 4]).padStart(2, '0'); });
    };
    if (nums.length) { tick(); setInterval(tick, 1000); }

    // lightbox
    const box = document.getElementById('lightbox');
    const boxImg = box.querySelector('img');
    main.querySelectorAll('.photo[data-i]').forEach(b => b.addEventListener('click', () => {
      const p = D.photos[b.dataset.i];
      boxImg.src = p.src; boxImg.alt = p.caption; box.showModal();
    }));
    box.addEventListener('click', ev => { if (ev.target === box || ev.target.closest('.close')) box.close(); });

    document.getElementById('reopen')?.addEventListener('click', () => builder ? showCover() : scrollTo(0, 0));

    // .ics for every event
    main.querySelectorAll('[data-ics]').forEach(b => b.addEventListener('click', () => {
      const stamp = t => `${c.y}${c.m}${c.d}T${t.replace(':', '')}00`;
      const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//everafter//vi'];
      D.events.forEach((ev, i) => {
        const endH = String(Math.min(23, +ev.time.slice(0, 2) + (ev.hours || 2))).padStart(2, '0');
        lines.push('BEGIN:VEVENT', `UID:${c.config.siteSettings?.slug || 'wedding'}-${i}@everafter`,
          `DTSTART;TZID=Asia/Ho_Chi_Minh:${stamp(ev.time)}`, `DTEND;TZID=Asia/Ho_Chi_Minh:${stamp(`${endH}:${ev.time.slice(3)}`)}`,
          `SUMMARY:${ev.title} — ${D.bride.short} & ${D.groom.short}`, `LOCATION:${ev.place}, ${ev.address}`, 'END:VEVENT');
      });
      lines.push('END:VCALENDAR');
      const a = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/calendar' })),
        download: `${c.config.siteSettings?.slug || 'wedding'}.ics`
      });
      a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }));

    // video: load the embed only when asked
    main.querySelectorAll('.video-frame').forEach(f => f.querySelector('.play')?.addEventListener('click', () => {
      const url = f.dataset.embed;
      if (!url) { f.querySelector('.video-soon').hidden = false; return; }
      f.innerHTML = `<iframe src="${esc(url)}" title="Video cưới" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    }));

    // copy account numbers
    main.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Đã sao chép ✓'; }
      catch { b.textContent = b.dataset.copy; }
    }));

    // registry picks
    const picked = new Set(EA.list('registry').map(p => String(p.item)));
    main.querySelectorAll('[data-pick]').forEach(b => {
      const mark = () => { b.textContent = 'Bạn đã chọn món này ✓'; b.disabled = true; };
      if (picked.has(b.dataset.pick)) mark();
      b.addEventListener('click', async () => { await EA.store('registry', { item: b.dataset.pick, guest: c.guest }); mark(); });
    });

    wireRsvp(c);
    wireGuestbook(c);
    afterFns.forEach(fn => { try { fn(c, main); } catch (err) { console.error(err); } });

    // reveal on scroll
    if (!reduced && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }), { rootMargin: '0px 0px -10% 0px' });
      main.querySelectorAll('.sec').forEach(s => { s.classList.add('reveal'); io.observe(s); });
    }
  }

  function formError(form, msg) {
    const p = form.querySelector('.form-error');
    p.textContent = msg; p.hidden = !msg;
  }

  function wireRsvp(c) {
    const r = c.mods.rsvp?.content || {};
    main.querySelectorAll('form.rsvp-form').forEach(form => {
      const toggle = () => {
        const yes = form.attending.value !== 'no';
        form.querySelectorAll('.when-yes').forEach(el => { el.hidden = !yes; });
      };
      form.addEventListener('change', () => { toggle(); formError(form, ''); });
      form.addEventListener('submit', async ev => {
        ev.preventDefault();
        const name = form.elements['name'].value.trim();
        if (!name) { formError(form, 'Bạn cho chúng mình biết tên nhé.'); form.elements['name'].focus(); return; }
        if (!form.attending.value) { formError(form, 'Chọn "Mình sẽ đến" hoặc "Không đến được" giúp chúng mình nhé.'); return; }
        const payload = {
          name, attending: form.attending.value === 'yes',
          plus: +(form.plus?.value || 0),
          events: [...form.querySelectorAll('input[name=events]:checked')].map(i => +i.value),
          note: form.note.value.trim()
        };
        form.querySelector('button[type=submit]').disabled = true;
        await EA.store('rsvp', payload);
        const done = form.nextElementSibling;
        done.textContent = payload.attending ? (r.thankYes || 'Cảm ơn bạn!') : (r.thankNo || 'Cảm ơn bạn đã báo.');
        form.hidden = true; done.hidden = false; done.focus?.();
      });
    });
  }

  function wireGuestbook(c) {
    const samples = c.mods.guestbook?.content?.samples || [];
    let remoteEntries = [];
    const entryKey = entry => `${String(entry.name || '').trim()}\u0000${String(entry.message || '').trim()}`;
    const draw = list => {
      const localEntries = EA.list('guestbook').slice().reverse();
      const localKeys = new Set(localEntries.map(entryKey));
      const sharedEntries = remoteEntries.filter(entry => !localKeys.has(entryKey(entry)));
      const all = [...localEntries, ...sharedEntries, ...samples];
      list.innerHTML = all.map(w => `<li class="wish-item"><p>${esc(w.message)}</p><p class="by">— ${esc(w.name)}</p></li>`).join('');
    };
    main.querySelectorAll('.wish-list').forEach(draw);
    main.querySelectorAll('form.wish-form').forEach(form => {
      if (c.guest !== c.data.defaultGuest) form.elements['name'].value = c.guest;
      const status = form.querySelector('.form-status');
      form.addEventListener('input', () => {
        formError(form, '');
        if (status) { status.hidden = true; status.textContent = ''; }
      });
      form.addEventListener('submit', async ev => {
        ev.preventDefault();
        const name = form.elements['name'].value.trim(), message = form.message.value.trim();
        if (!name || !message) { formError(form, 'Điền tên và lời chúc giúp chúng mình nhé.'); return; }
        const formConfig = c.mods.guestbook?.content?.googleForm;
        if (formConfig && !window.WeddingGuestbook?.submit({
          cardId: formConfig.cardId, name, message
        })) {
          formError(form, 'Chưa gửi được lời chúc. Bạn thử lại sau nhé.');
          return;
        }
        await EA.store('guestbook', { name, message });
        form.message.value = '';
        if (status) {
          status.textContent = formConfig ? 'Lời chúc đã được gửi vào sổ lưu bút.' : 'Lời chúc đã được lưu trên thiết bị này.';
          status.hidden = false;
        }
        main.querySelectorAll('.wish-list').forEach(draw);
      });
    });

    const formConfig = c.mods.guestbook?.content?.googleForm;
    if (formConfig) {
      window.WeddingGuestbook?.load({
        cardId: formConfig.cardId,
        onUpdate(entries) {
          remoteEntries = entries;
          main.querySelectorAll('.wish-list').forEach(draw);
        }
      });
    }
  }
})();
