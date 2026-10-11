// Giữa 8 tỷ người: thousands of dots drift; on open everyone fades except two, who find each other.
const WORLD = 8100000000;
const fmt = n => Math.round(n).toLocaleString('vi-VN');

EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <canvas class="crowd" aria-hidden="true"></canvas>
    <div class="bl-overlay">
      <p class="bl-to">Gửi ${e(c.guest)}</p>
      <p class="bl-count"><span class="num">${fmt(WORLD)}</span> người</p>
      <p class="bl-line">Giữa ngần ấy con người trên thế giới…</p>
      <p class="bl-found">…chỉ hai người tìm thấy nhau: <b class="a">${e(D.bride.short)}</b> &amp; <b class="b">${e(D.groom.short)}</b></p>
      <button class="open-btn" type="button">Tìm nhau</button>
    </div>`;

  const cv = el.querySelector('canvas'), ctx = cv.getContext('2d');
  const dpr = Math.min(2, devicePixelRatio || 1);
  let W, H, dots = [], A, B, phase = 'drift', t0 = 0, raf = 0;
  const size = () => {
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  size();
  const n = Math.min(2400, Math.round(W * H / 320));
  for (let i = 0; i < n; i++) dots.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: Math.random() * 1.4 + .8 });
  A = { x: W * .22, y: H * .62, r: 5 }; B = { x: W * .78, y: H * .34, r: 5 };
  addEventListener('resize', size);

  const draw = now => {
    ctx.clearRect(0, 0, W, H);
    const p = phase === 'drift' ? 0 : Math.min(1, (now - t0) / 2600);
    const fade = Math.max(0, 1 - p * 2.2);                    // crowd fades in the first ~45%
    const meet = Math.max(0, (p - .35) / .65), ease = meet < .5 ? 2 * meet * meet : 1 - (-2 * meet + 2) ** 2 / 2;
    if (fade > 0) {
      ctx.fillStyle = `rgba(150,154,165,${.55 * fade})`;
      for (const d of dots) {
        if (!c.reduced) { d.x = (d.x + d.vx + W) % W; d.y = (d.y + d.vy + H) % H; }
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 7); ctx.fill();
      }
    }
    const cx = W / 2, cy = H * .5;
    const ax = A.x + (cx - 14 - A.x) * ease, ay = A.y + (cy - A.y) * ease;
    const bx = B.x + (cx + 14 - B.x) * ease, by = B.y + (cy - B.y) * ease;
    if (p > .3) { ctx.strokeStyle = `rgba(20,22,26,${.35 * Math.min(1, (p - .3) * 4)})`; ctx.setLineDash([3, 5]); ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke(); ctx.setLineDash([]); }
    [[ax, ay, '#ff5a4e'], [bx, by, '#2f6bff']].forEach(([x, y, col]) => {
      ctx.fillStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(x, y, A.r + ease * 2, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
    });
    // counter falls from 8.1 billion to 2 as the crowd fades
    const num = p === 0 ? WORLD : Math.max(2, WORLD * Math.pow(1 - Math.min(1, p / .55), 6));
    el.querySelector('.num').textContent = fmt(num);
    if (!el.classList.contains('is-leaving') || now - t0 < 4000) raf = requestAnimationFrame(draw);
  };
  raf = requestAnimationFrame(draw);

  el.querySelector('.open-btn').addEventListener('click', () => {
    phase = 'meet'; t0 = performance.now();
    el.classList.add('finding');
    c.after(3200, () => { open(); setTimeout(() => cancelAnimationFrame(raf), 900); });
  }, { once: true });
});

EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="bl-hero">
    <div class="stat">
      <p class="label">Xác suất hai người gặp nhau</p>
      <p class="odds"><span>1</span><small>/ ${fmt(WORLD)}</small></p>
      <h1 class="bl-names"><span class="a">${e(cp.brideName)}</span> <span class="plus">+</span> <span class="b">${e(cp.groomName)}</span> <span class="eq">= 1</span></h1>
      <p class="headline">${c.t(cp.headline)}</p>
      <p class="hero-date">${c.dateText} · ${e(cp.city)}</p>
      ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    </div>
    <figure class="bl-photo"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"><figcaption>n = 2</figcaption></figure>
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Dữ liệu', 'Hành trình, theo từng điểm dữ liệu')}
  <ol class="datapoints">
    ${(mod.content.chapters || []).map((ch, i, all) => `
      <li style="--p:${Math.round((i + 1) / all.length * 100)}%">
        <p class="dp-id">#${String(i + 1).padStart(2, '0')} · ${e(ch.date)}</p>
        <div class="bar" aria-hidden="true"><span></span></div>
        <h3>${e(ch.title)}</h3>
        <p>${e(ch.text)}</p>
      </li>`).join('')}
  </ol>
</div>`);

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Điểm hẹn', 'Hai toạ độ, một ngày')}
  <div class="coords">
    ${D.events.map((ev, i) => `
      <article class="coord">
        <p class="dp-id">Điểm hẹn ${String(i + 1).padStart(2, '0')}</p>
        <p class="c-time">${e(ev.time)}</p>
        <h3>${e(ev.title)}</h3>
        <p>${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('Bộ dữ liệu', 'Khoảnh khắc được ghi lại')}
  <div class="bl-grid">${D.photos.map((p, i) => ui.photo(p, i, `<span class="img-id" aria-hidden="true">IMG_${String(i + 1).padStart(3, '0')}</span>`)).join('')}</div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Trở thành một trong những người có mặt')}
  <div class="bl-rsvp"><p class="plus-one">+1</p>${ui.rsvpForm()}</div>
</div>`);


// ---- wow: the hero is a live dot field; dots step aside for your finger and the two coloured dots orbit ----
EA.afterRender((c, main) => {
  const hero = main.querySelector('.m-hero'); if (!hero || c.reduced) return;
  hero.style.position = 'relative';
  const cv = document.createElement('canvas'); cv.className = 'field'; cv.setAttribute('aria-hidden', 'true'); hero.prepend(cv);
  const g = cv.getContext('2d'), dpr = Math.min(2, devicePixelRatio || 1);
  let W, H, dots = [], px = -999, py = -999, vis = true, raf = 0;
  const init = () => {
    W = hero.clientWidth; H = hero.clientHeight; cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
    dots = []; for (let x = 10; x < W; x += 18) for (let y = 10; y < H; y += 18) dots.push({ hx: x, hy: y, x, y });
  };
  init(); new ResizeObserver(init).observe(hero);
  hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; });
  hero.addEventListener('pointerleave', () => { px = py = -999; });
  new IntersectionObserver(([en]) => { vis = en.isIntersecting; if (vis) loop(); }).observe(hero);
  const loop = t => {
    cancelAnimationFrame(raf); if (!vis) return;
    t ||= performance.now();
    g.clearRect(0, 0, W, H); g.fillStyle = 'rgba(160,164,175,.5)';
    for (const d of dots) {
      const dx = d.x - px, dy = d.y - py, dist = Math.hypot(dx, dy), push = dist < 90 ? (90 - dist) / 90 * 26 : 0;
      const tx = d.hx + (dist ? dx / dist : 0) * push, ty = d.hy + (dist ? dy / dist : 0) * push;
      d.x += (tx - d.x) * .18; d.y += (ty - d.y) * .18;
      g.fillRect(d.x - 1, d.y - 1, 2, 2);
    }
    const cx = W * .5, cy = Math.min(H * .18, 120), a = t / 900;
    [['#ff5a4e', 0], ['#2f6bff', Math.PI]].forEach(([col, o]) => {
      g.fillStyle = col; g.shadowColor = col; g.shadowBlur = 14;
      g.beginPath(); g.arc(cx + Math.cos(a + o) * 22, cy + Math.sin(a + o) * 10, 5, 0, 7); g.fill(); g.shadowBlur = 0;
    });
    raf = requestAnimationFrame(loop);
  };
  loop();
});
