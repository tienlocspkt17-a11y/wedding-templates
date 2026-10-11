// Anime: an original slice-of-life "final episode" title card with speed lines and falling petals.
const PETALS = Array.from({ length: 16 }, (_, i) =>
  `<span class="petal" style="--x:${(i * 61) % 100}%;--d:${6 + (i % 5)}s;--delay:-${(i * 1.3) % 7}s;--s:${.6 + (i % 3) * .25}"></span>`).join('');
const CLOUDS = '<span class="cloud c1"></span><span class="cloud c2"></span><span class="cloud c3"></span>';

EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="an-sky" aria-hidden="true">${CLOUDS}${PETALS}</div>
    <div class="speed" aria-hidden="true"></div>
    <div class="flash" aria-hidden="true"></div>
    <div class="title-card">
      <p class="ep">EP. FINAL</p>
      <h1 class="ep-title">Ngày chúng mình cưới</h1>
      <p class="ep-cast">${e(D.bride.short)} <span>×</span> ${e(D.groom.short)}</p>
      <p class="ep-to">Gửi ${e(c.guest)} · khởi chiếu ${c.d}.${c.m}.${c.y}</p>
      <button class="open-btn" type="button">▶ Xem tập cuối</button>
    </div>`;
  el.querySelector('.open-btn').addEventListener('click', () => {
    el.classList.add('go');
    c.after(2400, open);
  }, { once: true });
});

EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="kv">
  <div class="an-sky" aria-hidden="true">${CLOUDS}${PETALS}</div>
  <div class="wrap kv-inner">
    <figure class="kv-panel"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></figure>
    <div class="kv-text">
      <p class="ep">Key visual · ${c.y}</p>
      <h1 class="kv-title"><span>${e(cp.brideName)}</span><span class="x">×</span><span>${e(cp.groomName)}</span></h1>
      <p class="bubble">${c.t(cp.headline)}</p>
      <p class="hero-date">${c.dow} · ${c.dateText}</p>
      ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    </div>
  </div>
</div>`;
});

EA.section('invitation', ({ data: D, esc: e, mod, t }) => `<div class="wrap narrow">
  <div class="vn">
    <p class="vn-name">${e(D.bride.short)} &amp; ${e(D.groom.short)}</p>
    <div class="vn-box">
      <p class="vn-greet">${t(mod.content.greeting || 'Gửi {guestName},')}</p>
      ${D.letter.map(p => `<p>${t(p)}</p>`).join('')}
      <p class="vn-hl">${t(D.letterHighlight)}</p>
      <span class="vn-next" aria-hidden="true">▼</span>
    </div>
  </div>
</div>`);

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Episode list', 'Danh sách tập phim')}
  <ol class="episodes">
    ${(mod.content.chapters || []).map((ch, i) => `
      <li class="episode">
        <div class="thumb">${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}<span class="ep-no">#${String(i + 1).padStart(2, '0')}</span></div>
        <div class="ep-info"><p class="air">Phát sóng · ${e(ch.date)}</p><h3>Tập ${i + 1}: ${e(ch.title)}</h3><p>${e(ch.text)}</p></div>
      </li>`).join('')}
  </ol>
</div>`);

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Next episode', 'Tập tiếp theo')}
  <div class="previews">
    ${D.events.map((ev, i) => `
      <article class="preview">
        <span class="stamp-soon" aria-hidden="true">Sắp chiếu!</span>
        <p class="ep">Part ${i + 1}</p>
        <p class="pv-time">${e(ev.time)}</p>
        <h3>${e(ev.title)}</h3>
        <p>${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('Manga', 'Trang truyện của chúng mình')}
  <div class="manga">${D.photos.map((p, i) => ui.photo(p, i)).join('')}</div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('Lựa chọn', 'Bạn chọn gì?')}
  <div class="vn choice-box">
    <p class="vn-name">Lựa chọn quan trọng</p>
    <div class="vn-box">${ui.rsvpForm().replace('Mình sẽ đến', '▶ Mình sẽ đến chung vui!').replace('Tiếc quá, mình không đến được', '▶ Lần này mình bận mất rồi…').replace('Gửi phản hồi', 'Xác nhận lựa chọn')}</div>
  </div>
</div>`);


// ---- wow: the invitation types itself out line by line like a visual novel; tap to continue ----
EA.afterRender((c, main) => {
  const box = main.querySelector('.vn-box'); if (!box || c.reduced) return;
  const lines = [...box.querySelectorAll('p')];
  const texts = lines.map(p => p.textContent);
  lines.forEach(p => { p.textContent = ''; p.hidden = true; });
  box.insertAdjacentHTML('beforeend', '<p class="vn-tap">Chạm để tiếp tục</p>');
  let i = 0, ch = 0, timer = 0, started = false;
  const type = () => {
    if (i >= lines.length) { box.querySelector('.vn-tap').textContent = 'Hết đoạn ✿'; return; }
    lines[i].hidden = false;
    clearInterval(timer);
    timer = setInterval(() => { ch++; lines[i].textContent = texts[i].slice(0, ch); if (ch >= texts[i].length) { clearInterval(timer); timer = 0; } }, 28);
  };
  const next = () => {
    if (timer) { clearInterval(timer); timer = 0; lines[i].textContent = texts[i]; return; }  // finish current line
    i++; ch = 0; type();
  };
  box.addEventListener('click', () => { if (started) next(); });
  new IntersectionObserver(([en], o) => { if (en.isIntersecting && !started) { started = true; o.disconnect(); type(); } }, { threshold: .5 }).observe(box);
});
