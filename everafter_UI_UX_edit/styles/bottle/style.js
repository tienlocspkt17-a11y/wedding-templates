// Thư trong chai: a bottle bobs on the shore; the cork pops and the scroll unrolls.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="shore">
      <p class="k">Một lá thư trôi đến ${e(c.guest)}</p>
      <div class="bottle" aria-hidden="true">
        <span class="cork"></span>
        <span class="neck"></span>
        <span class="glass"><span class="roll"></span></span>
      </div>
      <div class="scroll">
        <p class="to">Gửi ${e(c.guest)},</p>
        <p class="n">${e(D.bride.short)} &amp; ${e(D.groom.short)}</p>
        <p class="d">${c.dow} · ${c.dateText}</p>
      </div>
      <button class="open-btn" type="button">Mở nút chai</button>
    </div>
    <div class="waves" aria-hidden="true"></div>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('uncorked');
    c.after(700, () => el.classList.add('unrolled'));
    c.after(3000, open);
  }, { once: true });
});

// ---- layouts: footprints in the sand and a beach walk of photos ----
EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding itinerary', 'Dấu chân một ngày')}
  <ol class="steps">
    ${D.itinerary.map(it => `<li><span class="foot" aria-hidden="true"></span><time>${e(it.time)}</time><strong>${e(it.title)}</strong><span class="n">${e(it.note)}</span></li>`).join('')}
  </ol>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Dạo biển cùng chúng mình', 'Vuốt sang để xem thêm ảnh.')}
  <div class="shoreline" tabindex="0" aria-label="Ảnh, cuộn ngang">${D.photos.map((p, i) => ui.photo(p, i)).join('')}</div>
</div>`);

// ---- more layouts: tide cards, shells for notes, bottled FAQ, letter on the scroll ----
EA.section('letter', ({ data: D, esc: e, guest, dateText }) => `<div class="wrap narrow">
  <div class="parchment">
    <p class="kicker">${dateText}</p>
    <p class="salute">Gửi ${e(guest)},</p>
    <h1 class="display">Một lời mời từ chúng mình</h1>
    ${D.letter.slice(0, 2).map(p => `<p>${e(p)}</p>`).join('')}
    <p class="highlight">${e(D.letterHighlight)}</p>
    ${D.letter.slice(2).map(p => `<p>${e(p)}</p>`).join('')}
    <p class="sign">Thân mến,<br><span class="names">${e(D.bride.name)} <span class="amp">&amp;</span> ${e(D.groom.name)}</span></p>
  </div>
</div>`);

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Theo con nước')}
  <div class="tides">
    ${D.events.map((ev, i) => `
      <article class="tide ${i ? 'dusk' : 'dawn'}">
        <p class="label">${e(ev.label)}</p>
        <p class="t">${e(ev.time)}</p>
        <h3>${e(ev.title)}</h3>
        <p>${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('faq', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding guide', 'Những lá thư nhỏ')}
  ${D.faq.map(f => `<details class="mini-bottle"><summary><span class="mb" aria-hidden="true"></span>${e(f.q)}</summary><p>${e(f.a)}</p></details>`).join('')}
</div>`);

// ---- v3: horizon hero, island-hopping story, bottle-message RSVP ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="bo-hero">
  <div class="bo-sea"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></div>
  <div class="bo-sand">
    <h1 class="bo-names">${e(cp.brideShortName)} &amp; ${e(cp.groomShortName)}</h1>
    <p class="headline">${c.t(cp.headline)}</p>
    <p class="hero-date">${c.dow} · ${c.dateText} · ${e(cp.city)}</p>
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Những hòn đảo đã qua', 'Vuốt sang để đi tiếp.')}
  <div class="islands" tabindex="0" aria-label="Câu chuyện, cuộn ngang">
    ${(mod.content.chapters || []).map(ch => `
      <article class="island">
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <p class="is-date">${e(ch.date)}</p>
        <h3>${e(ch.title)}</h3>
        <p>${e(ch.text)}</p>
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Thả thư hồi âm')}
  <div class="bottle-msg"><span class="cork-top" aria-hidden="true"></span><div class="parchment">${ui.rsvpForm()}</div></div>
</div>`);


// Tap on empty page space (not on links, buttons, inputs, photos) → fn(x, y, event)
const onEmptyTap = (main, fn) => main.addEventListener('click', e => {
  if (e.target.closest('a, button, input, select, textarea, label, summary, details, dialog, canvas, .photo, img, iframe')) return;
  fn(e.clientX, e.pageY, e);
});
const fx = (() => { const l = document.createElement('div'); l.className = 'fx-layer'; l.setAttribute('aria-hidden', 'true'); document.body.appendChild(l); return l; })();

// ---- wow: tap empty space to send ripples across the water ----
EA.afterRender((c, main) => {
  if (c.reduced) return;
  onEmptyTap(main, (x, y) => {
    for (let i = 0; i < 3; i++) {
      const r = document.createElement('span'); r.className = 'ripple';
      r.style.cssText = `left:${x}px;top:${y}px;animation-delay:${i * .22}s`;
      fx.appendChild(r); setTimeout(() => r.remove(), 1900);
    }
  });
});
