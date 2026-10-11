// Cổ trang: a horizontal handscroll unrolls into a marriage letter (hôn thư) written in vertical columns.
const INK_HILLS = `<svg class="hills" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 150 C60 110 90 60 140 90 C190 120 210 40 270 70 C330 100 360 150 420 110 C480 70 520 100 600 80 L600 220 L0 220Z" fill="rgba(28,26,23,.10)"/>
  <path d="M0 180 C80 130 130 150 190 120 C250 90 300 160 360 140 C430 118 470 90 540 130 C570 145 590 150 600 150 L600 220 L0 220Z" fill="rgba(28,26,23,.18)"/>
  <path d="M0 205 C100 175 160 200 240 180 C320 160 380 200 460 185 C520 175 560 190 600 185 L600 220 L0 220Z" fill="rgba(28,26,23,.28)"/>
</svg>`;
const NUMS = ['nhất', 'hai', 'ba', 'tư', 'năm', 'sáu', 'bảy', 'tám'];

EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    ${INK_HILLS}
    <div class="handscroll">
      <span class="roller l" aria-hidden="true"></span>
      <div class="paper">
        <p class="v-han vert" aria-hidden="true">婚書</p>
        <div class="lh-body">
          <p class="lh-title">Hôn thư</p>
          <p>Kính gửi ${e(c.guest)}</p>
          <p class="lh-names">${e(D.groom.name)}<span>·</span>${e(D.bride.name)}</p>
          <p>kết tóc se duyên, trăm năm ước hẹn</p>
          <p class="lh-date">Ngày ${+c.d} tháng ${+c.m} năm ${c.y}</p>
        </div>
        <span class="seal-v" aria-hidden="true">囍</span>
      </div>
      <span class="roller r" aria-hidden="true"></span>
    </div>
    <button class="open-btn" type="button">Mở quyển trục</button>`;
  el.querySelector('.open-btn').addEventListener('click', () => {
    el.classList.add('unroll');
    c.after(3000, open);
  }, { once: true });
});

EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="an-hero">
    <div class="an-sun" aria-hidden="true"></div>
    <figure class="hanging"><span class="rod"></span><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"><span class="rod"></span></figure>
    <h1 class="an-names"><span>${e(cp.groomName)}</span><span class="dot">·</span><span>${e(cp.brideName)}</span></h1>
    <div class="an-meta">
      <p class="headline">${c.t(cp.headline)}</p>
      <p class="hero-date">${c.dow} · ${c.dateText}</p>
      ${cp.lunarDate ? `<p class="lunar">${e(cp.lunarDate)}</p>` : ''}
      ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    </div>
    ${INK_HILLS}
  </div>
</div>`;
});

EA.section('families', ({ data: D, esc: e, mod }) => `<div class="wrap">
  <div class="two-clans">
    <div class="clan"><p class="v-title">Nhà trai</p><p>Ông ${e(D.groomFamily.father)}</p><p>Bà ${e(D.groomFamily.mother)}</p></div>
    <div class="clan-mid">
      <p class="big-hy" aria-hidden="true">囍</p>
      <p class="kicker">${e(mod.content.kicker || 'Trân trọng báo tin lễ thành hôn của')}</p>
      <h2 class="couple"><span>${e(D.groom.name)}</span><span class="amp">&amp;</span><span>${e(D.bride.name)}</span></h2>
      <p class="note">${e(D.announceNote)}</p>
    </div>
    <div class="clan"><p class="v-title">Nhà gái</p><p>Ông ${e(D.brideFamily.father)}</p><p>Bà ${e(D.brideFamily.mother)}</p></div>
  </div>
</div>`);

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Truyện kể', 'Duyên phận của chúng mình')}
  <div class="chapters">
    ${(mod.content.chapters || []).map((ch, i) => `
      <article class="hoi">
        <p class="hoi-no vert" aria-hidden="true">Hồi thứ ${NUMS[i] || i + 1}</p>
        <div class="hoi-body">
          <p class="label">Hồi thứ ${NUMS[i] || i + 1} · ${e(ch.date)}</p>
          <h3>${e(ch.title)}</h3>
          <p>${e(ch.text)}</p>
        </div>
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
      </article>`).join('')}
  </div>
  ${mod.content.quote ? `<p class="story-quote">${e(mod.content.quote)}</p>` : ''}
</div>`);

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Hỷ yến', 'Lễ thành hôn')}
  <div class="slips-set">
    ${D.events.map(ev => `
      <article class="slips">
        <div class="slat-row" aria-hidden="true">
          <span class="slat">${e(ev.title)}</span><span class="slat">Giờ ${e(ev.time)}</span><span class="slat">${e(ev.place)}</span>
        </div>
        <h3 class="sr-only">${e(ev.title)}</h3>
        <p class="slip-info">${ui.evDate(ev)}<br>${e(ev.place)} · ${e(ev.address)}</p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('Hoạ quyển', 'Những bức tranh của chúng mình')}
  <div class="scrolls-wall">${D.photos.map((p, i) => `<div class="hang">${ui.photo(p, i)}</div>`).join('')}</div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('Hồi âm', 'Xin quý khách hồi âm')}
  <div class="red-letter"><div class="rl-inner">${ui.rsvpForm().replace('Gửi phản hồi', 'Gửi hồi âm')}</div></div>
</div>`);


// Tap on empty page space (not on links, buttons, inputs, photos) → fn(x, y, event)
const onEmptyTap = (main, fn) => main.addEventListener('click', e => {
  if (e.target.closest('a, button, input, select, textarea, label, summary, details, dialog, canvas, .photo, img, iframe')) return;
  fn(e.clientX, e.pageY, e);
});
const fx = (() => { const l = document.createElement('div'); l.className = 'fx-layer'; l.setAttribute('aria-hidden', 'true'); document.body.appendChild(l); return l; })();

// ---- wow: headings are brushed in as they appear; tap empty paper and ink blooms ----
EA.afterRender((c, main) => {
  const heads = main.querySelectorAll('.title, .hoi-body h3, .an-names');
  if (c.reduced || !('IntersectionObserver' in window)) heads.forEach(h => h.classList.add('brushed'));
  else {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('brushed'); io.unobserve(en.target); } }), { threshold: .6 });
    heads.forEach(h => { h.classList.add('brush'); io.observe(h); });
  }
  if (c.reduced) return;
  onEmptyTap(main, (x, y) => {
    const b = document.createElement('span'); b.className = 'ink';
    b.style.cssText = `left:${x}px;top:${y}px;--s:${(.7 + Math.random() * .8).toFixed(2)};border-radius:${[1, 2, 3, 4].map(() => 40 + Math.random() * 20 | 0).join('% ')}%`;
    fx.appendChild(b); setTimeout(() => b.remove(), 3200);
  });
});
