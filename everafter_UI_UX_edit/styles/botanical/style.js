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
  const reduced = c.reduced || !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (c.config.siteSettings?.showDockNavigation === false) {
    document.getElementById('dock-nav')?.remove();
    document.getElementById('dock')?.setAttribute('aria-label', 'Điều khiển nhạc');
  }
  const motionSelector = [
    '.album figure', '.specimen', '.page-ep', '.packet', '.leafy li', '.framed', '.garden-card', '.vine li',
    '#invitation > .wrap', '#families .fam', '#families .datebox', '#video .video-frame',
    '#saveDate .cal', '#saveDate .countdown > div', '#contact .person', '#guestbook .book',
    '#guestbook .wish-item', '#thanks .thanks-img'
  ].join(', ');
  const motionItems = Array.from(main.querySelectorAll(motionSelector));
  motionItems.forEach(el => el.classList.add('botanical-motion-item'));
  const sections = Array.from(main.querySelectorAll('.sec'));
  main.querySelectorAll('#hero .bt-oval .wreath').forEach(wreath => {
    Array.from(wreath.children).forEach((petal, i) => petal.style.setProperty('--bloom-order', i));
  });

  const siblingIndex = (el, selector) => Array.from(el.parentElement?.children || []).filter(node => node.matches(selector)).indexOf(el);
  const motionFor = (el) => {
    const narrow = innerWidth < 720;
    if (el.matches('.album figure')) {
      const i = siblingIndex(el, '.album figure');
      return { y: 88, angle: i % 2 ? 8 : -8, scale: .86, stagger: Math.min(i * .055, .16), type: 'album' };
    }
    if (el.matches('.specimen')) {
      const i = siblingIndex(el, '.specimen'), side = i % 2 ? 1 : -1;
      return { x: side * (narrow ? 44 : 82), y: 32, angle: side * 4, scale: .9, stagger: i * .05, type: 'specimen' };
    }
    if (el.matches('.page-ep')) {
      const i = siblingIndex(el, '.page-ep');
      return { y: 78, angle: i % 2 ? 5 : -5, rotX: 15, scale: .88, stagger: Math.min(i * .06, .15), type: 'story' };
    }
    if (el.matches('.packet')) {
      const i = siblingIndex(el, '.packet');
      return { y: 66, angle: i % 2 ? 12 : -12, scale: .84, stagger: Math.min(i * .07, .18), type: 'packet' };
    }
    if (el.matches('.leafy li')) {
      const i = siblingIndex(el, '.leafy li');
      return { x: i % 2 ? 20 : -20, y: 34, angle: i % 2 ? 2 : -2, scale: .96, stagger: Math.min(i * .04, .12), type: 'note' };
    }
    if (el.matches('#invitation > .wrap')) return { x: -34, y: 70, angle: -1.4, scale: .96, stagger: 0, type: 'letter' };
    if (el.matches('#families .fam')) {
      const i = siblingIndex(el, '.fam'), side = i % 2 ? 1 : -1;
      return { x: side * (narrow ? 28 : 48), y: 34, angle: side * 2.5, scale: .94, stagger: i * .12, type: 'family' };
    }
    if (el.matches('#families .datebox')) return { y: 58, scale: .9, stagger: .1, type: 'datebox' };
    if (el.matches('#video .video-frame')) return { y: 76, angle: -1.2, scale: .88, stagger: 0, type: 'video' };
    if (el.matches('#saveDate .cal')) return { y: 64, angle: -1.6, scale: .9, stagger: 0, type: 'calendar' };
    if (el.matches('#saveDate .countdown > div')) {
      const i = siblingIndex(el, '#saveDate .countdown > div');
      return { y: 44, angle: i % 2 ? 3 : -3, scale: .82, stagger: i * .075, type: 'countdown' };
    }
    if (el.matches('#contact .person')) {
      const i = siblingIndex(el, '.person'), side = i % 2 ? 1 : -1;
      return { x: side * (narrow ? 30 : 54), y: 30, angle: side * 2, scale: .92, stagger: i * .1, type: 'contact' };
    }
    if (el.matches('#guestbook .book')) return { y: 54, scale: .96, stagger: 0, type: 'book' };
    if (el.matches('#guestbook .wish-item')) {
      const i = siblingIndex(el, '.wish-item');
      return { x: i % 2 ? 22 : -22, y: 24, angle: i % 2 ? .8 : -.8, scale: .97, stagger: Math.min(i * .1, .35), type: 'wish' };
    }
    if (el.matches('#thanks .thanks-img')) return { y: 70, angle: 1.4, scale: .9, stagger: 0, type: 'thanks' };
    if (el.matches('.framed')) return { y: 56, angle: -1, scale: .91, stagger: 0, type: 'quote' };
    if (el.matches('.garden-card')) return { y: 64, scale: .93, stagger: 0, type: 'rsvp' };
    if (el.matches('.vine li')) {
      const i = siblingIndex(el, '.vine li'), side = i % 2 ? 1 : -1;
      return { x: side * 42, y: 28, angle: side * 2, scale: .94, stagger: Math.min(i * .025, .09), type: 'vine' };
    }
    return { y: 42, scale: .94, stagger: 0, type: 'default' };
  };
  const clamp = value => Math.max(0, Math.min(1, value));
  const easeInOut = value => value * value * (3 - 2 * value);
  const pageTop = el => {
    let top = 0, node = el;
    while (node && node !== document.documentElement) {
      top += node.offsetTop || 0;
      node = node.offsetParent;
    }
    return top;
  };
  const entries = motionItems.map(el => ({ el, top: 0, height: 0, motion: motionFor(el) }));
  const sectionEntries = sections.map(el => ({ el, top: 0, height: 0 }));
  const vine = main.querySelector('.vine');
  if (reduced) {
    motionItems.forEach(el => el.style.setProperty('--motion-opacity', '1'));
    sections.forEach(el => {
      el.style.setProperty('--wash-before-y', '0px');
      el.style.setProperty('--wash-after-y', '0px');
    });
    if (vine) vine.style.setProperty('--grow', '1');
  } else {
    let vineTop = 0, vineHeight = 1, raf = 0;
    const measure = () => {
      entries.forEach(entry => { entry.top = pageTop(entry.el); entry.height = entry.el.offsetHeight; });
      sectionEntries.forEach(entry => { entry.top = pageTop(entry.el); entry.height = entry.el.offsetHeight; });
      if (vine) { vineTop = pageTop(vine); vineHeight = Math.max(vine.offsetHeight, 1); }
    };
    const writeMotion = (el, progress, motion) => {
      const remaining = 1 - progress;
      el.style.setProperty('--motion-opacity', progress.toFixed(3));
      el.style.setProperty('--motion-x', `${((motion.x || 0) * remaining).toFixed(2)}px`);
      el.style.setProperty('--motion-y', `${(motion.y * remaining).toFixed(2)}px`);
      el.style.setProperty('--motion-angle', `${((motion.angle || 0) * remaining).toFixed(2)}deg`);
      el.style.setProperty('--motion-rot-x', `${((motion.rotX || 0) * remaining).toFixed(2)}deg`);
      el.style.setProperty('--motion-scale', (motion.scale + (1 - motion.scale) * progress).toFixed(3));

      if (motion.type === 'album') {
        const settle = easeInOut(clamp((progress - .12) / .88));
        el.style.setProperty('--photo-lift', `${(remaining * 18).toFixed(2)}px`);
        el.style.setProperty('--caption-lift', `${(remaining * 16).toFixed(2)}px`);
        el.style.setProperty('--photo-scale', (1.1 - .1 * settle).toFixed(3));
        el.style.setProperty('--photo-angle', `${((settle - 1) * 2.2).toFixed(2)}deg`);
      } else if (motion.type === 'specimen') {
        const stage = easeInOut(clamp((progress - .18) / .82));
        el.style.setProperty('--sprig-opacity', stage.toFixed(3));
        el.style.setProperty('--sprig-y', `${((1 - stage) * 24).toFixed(2)}px`);
        el.style.setProperty('--sprig-scale', (.55 + .45 * stage).toFixed(3));
        el.style.setProperty('--sprig-angle', `${((1 - stage) * -16).toFixed(2)}deg`);
        el.querySelectorAll('.sprig svg path').forEach(path => path.style.setProperty('--stem-growth', stage.toFixed(3)));
        el.querySelectorAll('.sprig svg ellipse, .sprig svg circle').forEach((leaf, i) => {
          const bloom = easeInOut(clamp((stage - i * .095) / Math.max(1 - i * .095, .1)));
          leaf.style.setProperty('--sprout-opacity', bloom.toFixed(3));
          leaf.style.setProperty('--sprout-scale', (.3 + .7 * bloom).toFixed(3));
        });
      } else if (motion.type === 'story') {
        const bloom = easeInOut(clamp((progress - .22) / .78));
        el.style.setProperty('--petal-opacity', (.8 * bloom).toFixed(3));
        el.style.setProperty('--petal-y', `${((1 - bloom) * -8).toFixed(2)}px`);
        el.style.setProperty('--petal-scale', (.18 + .82 * bloom).toFixed(3));
        el.style.setProperty('--petal-angle', `${(-92 + 72 * bloom).toFixed(2)}deg`);
        el.style.setProperty('--story-image-scale', (1.1 - .1 * bloom).toFixed(3));
        el.style.setProperty('--story-image-y', `${((1 - bloom) * 10).toFixed(2)}px`);
      } else if (motion.type === 'packet') {
        const unfold = easeInOut(clamp((progress - .16) / .84));
        el.style.setProperty('--flap-angle', `${(-66 * (1 - unfold)).toFixed(2)}deg`);
      } else if (motion.type === 'letter') {
        const reveal = easeInOut(clamp((progress - .12) / .88));
        el.style.setProperty('--rule-scale', (.18 + .82 * reveal).toFixed(3));
        el.style.setProperty('--highlight-opacity', (.45 + .55 * reveal).toFixed(3));
        el.style.setProperty('--highlight-y', `${((1 - reveal) * 12).toFixed(2)}px`);
      } else if (motion.type === 'video') {
        const reveal = easeInOut(clamp((progress - .12) / .88));
        el.style.setProperty('--video-image-scale', (1.14 - .14 * reveal).toFixed(3));
        el.style.setProperty('--play-scale', (.72 + .28 * reveal).toFixed(3));
        el.style.setProperty('--play-opacity', reveal.toFixed(3));
      } else if (motion.type === 'calendar') {
        const reveal = easeInOut(clamp((progress - .16) / .84));
        el.style.setProperty('--calendar-mark-scale', (.25 + .75 * reveal).toFixed(3));
        el.style.setProperty('--calendar-mark-rotate', `${((1 - reveal) * -44).toFixed(2)}deg`);
      } else if (motion.type === 'countdown') {
        const reveal = easeInOut(clamp((progress - .18) / .82));
        el.style.setProperty('--countdown-number-y', `${((1 - reveal) * 10).toFixed(2)}px`);
      } else if (motion.type === 'thanks') {
        const reveal = easeInOut(clamp((progress - .12) / .88));
        el.style.setProperty('--thanks-image-scale', (1.12 - .12 * reveal).toFixed(3));
        el.style.setProperty('--thanks-image-clip', `${(8 * (1 - reveal)).toFixed(2)}%`);
      } else if (motion.type === 'quote') {
        const bloom = easeInOut(clamp((progress - .28) / .72));
        el.style.setProperty('--corner-opacity', bloom.toFixed(3));
        el.style.setProperty('--corner-scale', (.48 + .52 * bloom).toFixed(3));
      } else if (motion.type === 'rsvp') {
        const bloom = easeInOut(clamp((progress - .2) / .8));
        el.style.setProperty('--wreath-opacity', (.6 * bloom).toFixed(3));
        el.style.setProperty('--wreath-scale', (.62 + .38 * bloom).toFixed(3));
        el.style.setProperty('--wreath-angle', `${(-30 * (1 - bloom)).toFixed(2)}deg`);
      } else if (motion.type === 'vine') {
        const leaf = easeInOut(clamp((progress - .15) / .85));
        el.style.setProperty('--leaf-opacity', leaf.toFixed(3));
        el.style.setProperty('--leaf-scale', (.12 + .88 * leaf).toFixed(3));
        el.style.setProperty('--leaf-angle', `${(-32 * (1 - leaf)).toFixed(2)}deg`);
      }
    };
    const update = () => {
      raf = 0;
      const vh = innerHeight || document.documentElement.clientHeight;
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const start = vh * .9, span = Math.max(vh * .68, 1);
      const progress = entries.map(entry => {
        const screenTop = entry.top - scrollY;
        entry.el.classList.toggle('botanical-near', screenTop < vh * 1.2 && screenTop + entry.height > -vh * .2);
        return easeInOut(clamp((start - screenTop) / span - entry.motion.stagger));
      });
      entries.forEach((entry, i) => writeMotion(entry.el, progress[i], entry.motion));
      sectionEntries.forEach(entry => {
        const distance = entry.top + entry.height / 2 - scrollY - vh / 2;
        const drift = Math.max(-52, Math.min(52, distance * .075));
        const turn = Math.max(-4, Math.min(4, distance * .006));
        entry.el.style.setProperty('--wash-before-y', `${(-drift).toFixed(1)}px`);
        entry.el.style.setProperty('--wash-after-y', `${drift.toFixed(1)}px`);
        entry.el.style.setProperty('--wash-before-rotate', `${turn.toFixed(2)}deg`);
        entry.el.style.setProperty('--wash-after-rotate', `${(-turn).toFixed(2)}deg`);
      });
      if (vine) {
        const line = easeInOut(clamp((vh * .84 - (vineTop - scrollY)) / (vineHeight + vh * .64)));
        vine.style.setProperty('--grow', line.toFixed(3));
      }
    };
    const schedule = () => { raf ||= requestAnimationFrame(update); };
    measure();
    update();
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', () => {
      entries.forEach(entry => { entry.motion = motionFor(entry.el); });
      measure();
      schedule();
    }, { passive: true });
    if ('ResizeObserver' in window) {
      const layoutObserver = new ResizeObserver(() => { measure(); schedule(); });
      layoutObserver.observe(main);
    }
    if (document.fonts?.ready) document.fonts.ready.then(() => { measure(); schedule(); });
  }
  if (reduced) return;
  const driftingPetals = document.createElement('div');
  driftingPetals.className = 'botanical-petal-drift';
  driftingPetals.setAttribute('aria-hidden', 'true');
  driftingPetals.innerHTML = Array.from({ length: 8 }, (_, i) => `<span style="--petal-index:${i}"></span>`).join('');
  document.body.appendChild(driftingPetals);
  const colors = ['#e3a8a0', '#f3c7c0', '#c9d8b6', '#f6e3b8'];
  onEmptyTap(main, (x, y) => {
    const f = document.createElement('span');
    f.className = 'bloom';
    f.style.cssText = `left:${x}px;top:${y}px;--c:${colors[Math.random() * 4 | 0]};--r:${Math.random() * 360 | 0}deg`;
    f.innerHTML = '<i></i><i></i><i></i><i></i><i></i><b></b>';
    fx.appendChild(f); setTimeout(() => f.remove(), 2600);
  });
});
