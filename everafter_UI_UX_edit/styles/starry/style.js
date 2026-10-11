// Ngưu Lang Chức Nữ: the magpie bridge draws across the night sky and the two stars meet.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="sky">
      <p class="to">Gửi ${e(c.guest)}</p>
      <svg viewBox="0 0 400 260" class="scene" aria-hidden="true">
        <path class="bridge" d="M70 200 Q200 30 330 200" pathLength="1"/>
        <g class="star s1"><circle r="16" class="halo"/><circle r="5"/></g>
        <g class="star s2"><circle r="16" class="halo"/><circle r="5"/></g>
        <circle class="meet" cx="200" cy="115" r="4"/>
      </svg>
      <div class="names">
        <span>${e(D.bride.short)}</span>
        <span>${e(D.groom.short)}</span>
      </div>
      <p class="line">Mỗi năm một lần, trên cầu Ô Thước, họ gặp nhau.<br>Chúng mình thì chọn ở bên nhau mỗi ngày.</p>
      <p class="d">${c.dateText}</p>
      <button class="open-btn" type="button">Bắc cầu</button>
    </div>`;
  // Point on the bridge curve M70 200 Q200 30 330 200 at t ∈ [0, 1].
  const onBridge = t => [(1 - t) ** 2 * 70 + 2 * (1 - t) * t * 200 + t * t * 330, (1 - t) ** 2 * 200 + 2 * (1 - t) * t * 30 + t * t * 200];
  const place = (g, t) => { const [x, y] = onBridge(t); g.setAttribute('transform', `translate(${x} ${y})`); };
  const [s1, s2] = el.querySelectorAll('.star');
  place(s1, 0); place(s2, 1);

  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('bridging');
    // once the bridge is drawn, each star walks along it to the middle
    c.after(1500, () => {
      if (c.reduced) { place(s1, .5); place(s2, .5); return; }
      const start = performance.now(), dur = 1300;
      const step = now => {
        const p = Math.min(1, (now - start) / dur), ease = p < .5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;
        place(s1, ease / 2); place(s2, 1 - ease / 2);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    c.after(3400, open);
  }, { once: true });
});

// ---- layouts: a constellation timeline and planet photos ----
EA.section('itinerary', ({ data: D, esc: e, ui }) => {
  const n = D.itinerary.length;
  // zig-zag star positions in a 100 x (n*20) box
  const pts = D.itinerary.map((_, i) => [i % 2 ? 24 : 8, 10 + i * 20]);
  return `<div class="wrap narrow">
  ${ui.head('Wedding itinerary', 'Chòm sao của ngày vui')}
  <div class="constellation" style="--rows:${n}">
    <svg viewBox="0 0 100 ${n * 20}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points="${pts.map(p => p.join(',')).join(' ')}" vector-effect="non-scaling-stroke"/>
    </svg>
    ${D.itinerary.map((it, i) => `
      <div class="star-item" style="top:${(10 + i * 20) / n / 20 * 100}%; --x:${pts[i][0]}%">
        <span class="dot" aria-hidden="true"></span>
        <div><time>${e(it.time)}</time><strong>${e(it.title)}</strong><span>${e(it.note)}</span></div>
      </div>`).join('')}
  </div>
</div>`;
});

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Khoảnh khắc của chúng mình')}
  <div class="orbit">${D.photos.map((p, i) => ui.photo(p, i)).join('')}</div>
</div>`);

// ---- more layouts: two stars joined by the bridge, wishes on stars, a shooting-star ending ----
EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Hai vì sao, một ngày')}
  <div class="pair">
    ${D.events.map((ev, i) => `
      <article class="orb-card">
        <span class="orb" aria-hidden="true"></span>
        <p class="label">${e(ev.label)}</p>
        <h3>${e(ev.title)}</h3>
        <p class="t">${e(ev.time)}</p>
        <p>${e(ev.place)}</p>
        <p class="addr">${e(ev.address)}</p>
        ${ui.actions(ev)}
      </article>${i === 0 ? '<div class="span-bridge" aria-hidden="true"></div>' : ''}`).join('')}
  </div>
</div>`);

EA.section('faq', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding guide', 'Điều bạn muốn biết')}
  <div class="wishes">
    ${D.faq.map(f => `<details class="wish"><summary><span class="twinkle" aria-hidden="true">✦</span>${e(f.q)}</summary><p>${e(f.a)}</p></details>`).join('')}
  </div>
</div>`);

EA.section('thanks', ({ data: D, esc: e, dateText }) => `<div class="wrap narrow">
  <div class="shooting" aria-hidden="true"></div>
  <p class="eyebrow">Thank you</p>
  <p class="mono">${e(D.monogram)}</p>
  <p>${e(D.thanks)}</p>
  <p class="kicker">${dateText}</p>
  <button class="btn" type="button" id="reopen">Ngắm lại bầu trời ↺</button>
</div>`);

// ---- v3: moon-portrait hero, orbit story, wish-on-a-star RSVP ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="st-hero">
    <p class="st-side l"><span class="st-dot" aria-hidden="true"></span>${e(cp.brideName)}<small>Chức Nữ</small></p>
    <div class="moon"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></div>
    <p class="st-side r"><span class="st-dot" aria-hidden="true"></span>${e(cp.groomName)}<small>Ngưu Lang</small></p>
  </div>
  <p class="headline">${c.t(cp.headline)}</p>
  <p class="hero-date">${c.dow} · ${c.dateText}</p>
  ${cp.lunarDate ? `<p class="lunar">${e(cp.lunarDate)}</p>` : ''}
  ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Quỹ đạo của chúng mình')}
  <ol class="orbit-story">
    ${(mod.content.chapters || []).map((ch, i) => `
      <li style="--i:${i}">
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <div><time>${e(ch.date)}</time><h3>${e(ch.title)}</h3><p>${e(ch.text)}</p></div>
      </li>`).join('')}
  </ol>
  ${mod.content.quote ? `<p class="story-quote">${e(mod.content.quote)}</p>` : ''}
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Gửi lên một vì sao')}
  <div class="glass">${ui.rsvpForm()}</div>
</div>`);


// Tap on empty page space (not on links, buttons, inputs, photos) → fn(x, y, event)
const onEmptyTap = (main, fn) => main.addEventListener('click', e => {
  if (e.target.closest('a, button, input, select, textarea, label, summary, details, dialog, canvas, .photo, img, iframe')) return;
  fn(e.clientX, e.pageY, e);
});
const fx = (() => { const l = document.createElement('div'); l.className = 'fx-layer'; l.setAttribute('aria-hidden', 'true'); document.body.appendChild(l); return l; })();

// ---- wow: the starfield drifts with your finger / phone tilt; tap for a shooting star ----
EA.afterRender((c, main) => {
  document.body.insertAdjacentHTML('afterbegin', '<div class="sky-far" aria-hidden="true"></div><div class="sky-near" aria-hidden="true"></div>');
  if (c.reduced) return;
  const far = document.querySelector('.sky-far'), near = document.querySelector('.sky-near');
  let tx = 0, ty = 0, raf = 0;
  const move = (x, y) => { tx = x; ty = y; raf ||= requestAnimationFrame(() => { raf = 0; far.style.translate = `${tx * 8}px ${ty * 8}px`; near.style.translate = `${tx * 22}px ${ty * 22}px`; }); };
  addEventListener('pointermove', e => move(e.clientX / innerWidth - .5, e.clientY / innerHeight - .5), { passive: true });
  addEventListener('deviceorientation', e => { if (e.gamma != null) move(Math.max(-1, Math.min(1, e.gamma / 45)) / 2, Math.max(-1, Math.min(1, (e.beta - 45) / 45)) / 2); });
  onEmptyTap(main, (x, y) => {
    const s = document.createElement('span'); s.className = 'shoot'; s.style.cssText = `left:${x - 160}px;top:${y - 60}px`;
    fx.appendChild(s); setTimeout(() => s.remove(), 1200);
  });
});
