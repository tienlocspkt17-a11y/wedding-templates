// Hoa ép: a folded card holding a pressed flower; the top flap unfolds.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  const flower = `
    <svg class="flower" viewBox="0 0 120 200" aria-hidden="true">
      <path d="M60 196 C58 150 62 110 60 70" stroke="#6f8a5c" stroke-width="2" fill="none"/>
      <path d="M60 150 C40 140 30 124 32 108 C48 114 58 130 60 150Z" fill="#8fa67a"/>
      <path d="M60 128 C80 120 92 104 90 88 C74 94 62 110 60 128Z" fill="#a3b890"/>
      <path d="M60 176 C44 172 36 160 38 148 C50 152 58 164 60 176Z" fill="#7d9669"/>
      <g transform="translate(60 56)">
        ${[0, 72, 144, 216, 288].map(r => `<ellipse rx="13" ry="24" cy="-20" transform="rotate(${r})" fill="#e3a8a0" opacity=".85"/>`).join('')}
        <circle r="8" fill="#d9a441"/>
      </g>
    </svg>`;
  el.innerHTML = `
    <div class="card">
      <div class="inner">
        ${flower}
        <p class="to">Gửi ${e(c.guest)},</p>
        <p class="n">${e(D.bride.short)} <span>&amp;</span> ${e(D.groom.short)}</p>
        <p class="d">${c.dateText}</p>
      </div>
      <div class="flap">
        <div class="front">
          <p class="k">Thiệp mời</p>
          <p class="mono">${e(D.monogram)}</p>
          <button class="open-btn" type="button">Mở thiệp</button>
        </div>
      </div>
    </div>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('opening');
    c.after(2400, open);
  }, { once: true });
});

// ---- layouts: a growing vine and a pressed-flower album ----
const LEAF = `<svg viewBox="0 0 40 24" aria-hidden="true"><path d="M2 12 C12 0 30 0 38 12 C30 24 12 24 2 12Z" fill="#a3b890"/><path d="M4 12 H34" stroke="#6f8a5c" stroke-width="1"/></svg>`;

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding itinerary', 'Một ngày thật vui')}
  <ol class="vine">
    ${D.itinerary.map(it => `<li><span class="leaf">${LEAF}</span><time>${e(it.time)}</time><strong>${e(it.title)}</strong><span class="n">${e(it.note)}</span></li>`).join('')}
  </ol>
</div>`);

EA.section('gallery', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Khoảnh khắc của chúng mình')}
  <div class="album">
    ${D.photos.map((p, i) => `<figure>${ui.photo(p, i)}<figcaption>${e(p.caption)}</figcaption></figure>`).join('')}
  </div>
</div>`);

// ---- more layouts: herbarium event cards, seed-packet notes, a framed note ----
const SPRIG = `<svg viewBox="0 0 60 90" aria-hidden="true"><path d="M30 88 C30 60 30 40 30 12" stroke="#6f8a5c" stroke-width="1.5" fill="none"/>${[20, 36, 52, 68].map((y, i) => `<ellipse cx="${i % 2 ? 40 : 20}" cy="${y}" rx="10" ry="5" transform="rotate(${i % 2 ? -30 : 30} ${i % 2 ? 40 : 20} ${y})" fill="#a3b890"/>`).join('')}<circle cx="30" cy="10" r="6" fill="#e3a8a0"/></svg>`;

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ngày chúng mình thành đôi')}
  <div class="herbarium">
    ${D.events.map((ev, i) => `
      <article class="specimen">
        <div class="sprig">${SPRIG}</div>
        <div>
          <p class="label">Mẫu số ${String(i + 1).padStart(2, '0')} · ${e(ev.label)}</p>
          <h3>${e(ev.title)}</h3>
          <p class="t">${ui.evDate(ev)}</p>
          <p>${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
          ${ui.actions(ev)}
        </div>
      </article>`).join('')}
  </div>
</div>`);

EA.section('notes', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Dress code &amp; notes', 'Một chút lưu ý')}
  <div class="packets">
    ${D.dressCode.map(s => `<div class="packet"><span class="flap" style="background:${e(s.color)}"></span><p>${e(s.name)}</p></div>`).join('')}
  </div>
  <ul class="notelist leafy">${D.notes.map(n => `<li>${e(n)}</li>`).join('')}</ul>
</div>`);

EA.section('quote', ({ data: D, esc: e }) => `<div class="wrap narrow">
  <div class="framed">
    <span class="corner tl">${SPRIG}</span><span class="corner br">${SPRIG}</span>
    <p class="eyebrow">A note from us</p>
    <blockquote>${e(D.quote)}</blockquote>
    <p class="sig">${e(D.bride.short)} &amp; ${e(D.groom.short)}</p>
  </div>
</div>`);

// ---- v3: wreath hero, pressed-page story, garden-card RSVP ----
const WREATH = `<svg class="wreath" viewBox="0 0 200 200" aria-hidden="true">${Array.from({ length: 22 }, (_, i) => {
  const a = i / 22 * Math.PI * 2, x = 100 + Math.cos(a) * 92, y = 100 + Math.sin(a) * 92, r = a * 180 / Math.PI + 90;
  return i % 5 === 0
    ? `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="#e3a8a0"/>`
    : `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="4" ry="9" transform="rotate(${(r + (i % 2 ? 30 : -30)).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${i % 2 ? '#a3b890' : '#8fa67a'}"/>`;
}).join('')}</svg>`;

EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap narrow">
  <div class="bt-hero">
    <div class="bt-oval">${WREATH}<img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></div>
    <p class="bt-script">${e(cp.brideShortName)} &amp; ${e(cp.groomShortName)}</p>
    <h1 class="couple bt-full"><span>${e(cp.brideName)}</span><span class="amp">và</span><span>${e(cp.groomName)}</span></h1>
    <p class="headline">${c.t(cp.headline)}</p>
    <p class="hero-date">${c.dow} · ${c.dateText}</p>
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Những trang hoa ép')}
  <div class="pages">
    ${(mod.content.chapters || []).map(ch => `
      <article class="page-ep">
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <p class="bt-date">${e(ch.date)}</p>
        <h3>${e(ch.title)}</h3>
        <p>${e(ch.text)}</p>
        <span class="petal" aria-hidden="true"></span>
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Gửi lời hồi âm')}
  <div class="garden-card">${WREATH}${ui.rsvpForm()}</div>
</div>`);


// Tap on empty page space (not on links, buttons, inputs, photos) → fn(x, y, event)
const onEmptyTap = (main, fn) => main.addEventListener('click', e => {
  if (e.target.closest('a, button, input, select, textarea, label, summary, details, dialog, canvas, .photo, img, iframe')) return;
  fn(e.clientX, e.pageY, e);
});
const fx = (() => { const l = document.createElement('div'); l.className = 'fx-layer'; l.setAttribute('aria-hidden', 'true'); document.body.appendChild(l); return l; })();

// ---- wow: the vine grows as you scroll; tap empty space and a flower blooms there ----
EA.afterRender((c, main) => {
  const vine = main.querySelector('.vine');
  if (vine && !c.reduced) {
    const items = vine.querySelectorAll('li');
    let raf = 0;
    const upd = () => {
      raf = 0;
      const r = vine.getBoundingClientRect(), p = Math.min(1, Math.max(0, (innerHeight * .8 - r.top) / r.height));
      vine.style.setProperty('--grow', p.toFixed(3));
      items.forEach(li => li.classList.toggle('grown', li.offsetTop / vine.offsetHeight < p));
    };
    addEventListener('scroll', () => { raf ||= requestAnimationFrame(upd); }, { passive: true }); upd();
  } else vine?.querySelectorAll('li').forEach(li => li.classList.add('grown'));
  if (c.reduced) return;
  const colors = ['#e3a8a0', '#f3c7c0', '#c9d8b6', '#f6e3b8'];
  onEmptyTap(main, (x, y) => {
    const f = document.createElement('span');
    f.className = 'bloom';
    f.style.cssText = `left:${x}px;top:${y}px;--c:${colors[Math.random() * 4 | 0]};--r:${Math.random() * 360 | 0}deg`;
    f.innerHTML = '<i></i><i></i><i></i><i></i><i></i><b></b>';
    fx.appendChild(f); setTimeout(() => f.remove(), 2600);
  });
});
