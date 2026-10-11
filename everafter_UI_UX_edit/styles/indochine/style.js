// Đông Dương: wooden louvred shutters swing open onto a tiled arch with the couple's names.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <p class="plaque">Kính mời <b>${e(c.guest)}</b></p>
    <div class="window">
      <div class="view">
        <div class="arch">
          <p class="k">Kính mời ${e(c.guest)}</p>
          <p class="n">${e(D.bride.name)}</p>
          <p class="amp">&amp;</p>
          <p class="n">${e(D.groom.name)}</p>
          <p class="k">${c.dow} · ${c.dateText}</p>
        </div>
      </div>
      <div class="shutter l"><i></i></div>
      <div class="shutter r"><i></i></div>
    </div>
    <button class="open-btn" type="button">Mở cửa sổ</button>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('opening');
    c.after(2600, open);
  }, { once: true });
});

// ---- layouts: arched doorways and an art-deco menu card ----
EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ngày chúng mình thành đôi')}
  <div class="doors">
    ${D.events.map(ev => `
      <article class="door-card">
        <p class="label">${e(ev.label)}</p>
        <p class="time">${e(ev.time)}</p>
        <h3>${e(ev.title)}</h3>
        <p class="place">${e(ev.place)}</p>
        <p class="addr">${e(ev.address)}</p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding itinerary', 'Một ngày thật vui')}
  <div class="menu">
    <p class="menu-top">Chương trình</p>
    <ol>
      ${D.itinerary.map(it => `<li><span class="t">${e(it.title)}<small>${e(it.note)}</small></span><span class="dots" aria-hidden="true"></span><time>${e(it.time)}</time></li>`).join('')}
    </ol>
  </div>
</div>`);

// ---- more layouts: arcade of arches, tile swatches, brass nameplates ----
EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Qua những ô cửa')}
  <div class="arcade">${D.photos.map((p, i) => ui.photo(p, i)).join('')}</div>
</div>`);

EA.section('notes', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Dress code &amp; notes', 'Một chút lưu ý')}
  <ul class="tiles">
    ${D.dressCode.map(s => `<li><span class="tile" style="--c:${e(s.color)}"></span>${e(s.name)}</li>`).join('')}
  </ul>
  <ol class="deco-notes">${D.notes.map(n => `<li>${e(n)}</li>`).join('')}</ol>
</div>`);

EA.section('contact', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Contact', 'Chúng mình luôn ở đây')}
  <div class="plaques">
    ${[['Cô dâu', D.bride], ['Chú rể', D.groom]].map(([r, p]) => `
      <a class="brass" href="tel:${e(p.phone.replace(/\s/g, ''))}"><small>${r}</small><b>${e(p.name)}</b><span>${e(p.phone)}</span></a>`).join('')}
  </div>
</div>`);

// ---- v3: arched-window hero, arcade story, art-deco RSVP card ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="ic-hero">
    <div class="ic-window"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></div>
    <div class="ic-txt">
      <p class="eyebrow">Sài Gòn · ${c.y}</p>
      <h1 class="couple"><span>${e(cp.brideName)}</span><span class="amp">&amp;</span><span>${e(cp.groomName)}</span></h1>
      <p class="deco-rule" aria-hidden="true"><span>◆</span></p>
      <p class="headline">${c.t(cp.headline)}</p>
      <p class="hero-date">${c.dow} · ${c.dateText}</p>
      ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    </div>
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Những ô cửa ký ức')}
  <div class="ic-arcade">
    ${(mod.content.chapters || []).map(ch => `
      <article class="ic-arch">
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <div class="plate"><p class="label">${e(ch.date)}</p><h3>${e(ch.title)}</h3></div>
        <p class="ic-text">${e(ch.text)}</p>
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Xin hồi âm')}
  <div class="deco-card"><span class="dc tl"></span><span class="dc tr"></span><span class="dc bl"></span><span class="dc br"></span>${ui.rsvpForm()}</div>
</div>`);


// ---- wow: each arch in the gallery hides behind wooden shutters that open as it scrolls into view ----
EA.afterRender((c, main) => {
  const arches = main.querySelectorAll('.arcade .photo');
  arches.forEach(p => p.insertAdjacentHTML('beforeend', '<span class="sh l" aria-hidden="true"></span><span class="sh r" aria-hidden="true"></span>'));
  if (c.reduced || !('IntersectionObserver' in window)) { arches.forEach(p => p.classList.add('shut-open')); return; }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { const i = [...arches].indexOf(en.target); setTimeout(() => en.target.classList.add('shut-open'), 250 + i * 220); io.unobserve(en.target); } }), { threshold: .45 });
  arches.forEach(p => io.observe(p));
});
