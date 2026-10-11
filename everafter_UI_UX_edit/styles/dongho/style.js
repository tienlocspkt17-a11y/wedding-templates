// Tranh Đông Hồ: a woodblock presses the print onto giấy điệp, one colour layer at a time.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="press">
      <div class="block" aria-hidden="true"></div>
      <div class="print">
        <div class="layer yellow" aria-hidden="true"></div>
        <div class="layer red" aria-hidden="true"><span class="hy">Hỷ</span></div>
        <div class="layer black">
          <p class="k">Tin vui · ${c.dateText}</p>
          <p class="n">${e(D.bride.name)}</p>
          <p class="amp">sánh duyên</p>
          <p class="n">${e(D.groom.name)}</p>
          <p class="k">Kính mời ${e(c.guest)}</p>
        </div>
        <div class="seal" aria-hidden="true">${e(D.monogram.replace(/\s/g, ''))}</div>
      </div>
    </div>
    <button class="open-btn" type="button">In tranh</button>`;
  el.querySelector('button').addEventListener('click', () => {
    const steps = ['p1', 'p2', 'p3'];
    steps.forEach((s, i) => c.after(i * 750, () => el.classList.add(s)));
    c.after(2700, open);
  }, { once: true });
});

// ---- layouts: hanging couplet scrolls (câu đối) and woodblock tiles ----
EA.section('events', ({ data: D, esc: e, ui, d, m }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ngày chúng mình thành đôi')}
  <div class="couplet">
    ${D.events.map(ev => `
      <article class="scroll-hang">
        <span class="rod" aria-hidden="true"></span>
        <div class="paper">
          <p class="label">${e(ev.label)}</p>
          <h3>${e(ev.title)}</h3>
          <p class="big">${e(ev.time)}</p>
          <p class="day">ngày ${d} tháng ${+m}</p>
          <p class="place">${e(ev.place)}</p>
          <p class="addr">${e(ev.address)}</p>
          ${ui.actions(ev)}
        </div>
        <span class="rod" aria-hidden="true"></span>
      </article>`).join('')}
  </div>
</div>`);

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Wedding itinerary', 'Một ngày thật vui')}
  <ol class="prints">
    ${D.itinerary.map(it => `<li><time>${e(it.time)}</time><strong>${e(it.title)}</strong><span>${e(it.note)}</span></li>`).join('')}
  </ol>
</div>`);

// ---- more layouts: announcement as a folk print, framed prints, red seal contacts ----
EA.section('announce', ({ data: D, esc: e, ui, dow, d, m, y }) => `<div class="wrap">
  <div class="folk">
    <p class="banner">Tin vui</p>
    <div class="families">
      ${ui.family('Nhà gái', D.brideFamily)}
      <div class="mono" aria-hidden="true">${e(D.monogram)}</div>
      ${ui.family('Nhà trai', D.groomFamily)}
    </div>
    <p class="kicker">Trân trọng báo tin lễ thành hôn của</p>
    <h2 class="couple"><span>${e(D.bride.name)}</span><span class="amp">sánh duyên</span><span>${e(D.groom.name)}</span></h2>
    <p class="note">${e(D.announceNote)}</p>
    <p class="folk-date">${dow} · ${d} · ${m} · ${y}</p>
  </div>
</div>`);

EA.section('gallery', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Tranh của chúng mình')}
  <div class="prints-wall">
    ${D.photos.map((p, i) => `<figure class="print-frame">${ui.photo(p, i)}<figcaption><span class="seal-sm" aria-hidden="true">${e(D.monogram.replace(/\s/g, ''))}</span>${e(p.caption)}</figcaption></figure>`).join('')}
  </div>
</div>`);

EA.section('contact', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Contact', 'Chúng mình luôn ở đây')}
  <div class="seals">
    ${[['Cô dâu', D.bride], ['Chú rể', D.groom]].map(([r, p]) => `
      <a class="seal-card" href="tel:${e(p.phone.replace(/\s/g, ''))}"><span class="stamp-red">${e(p.short)}</span><small>${r}</small><b>${e(p.name)}</b><span>${e(p.phone)}</span></a>`).join('')}
  </div>
</div>`);

// ---- v3: woodblock-poster hero, comic-strip story, seal-stamp RSVP ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="dh-poster">
    <p class="dh-band">Hỷ sự · ${c.d}.${c.m}.${c.y}</p>
    <div class="dh-img"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"><span class="dh-seal" aria-hidden="true">${e(cp.monogram.replace(/\s/g, ''))}</span></div>
    <h1 class="couple"><span>${e(cp.brideName)}</span><span class="amp">sánh duyên</span><span>${e(cp.groomName)}</span></h1>
    <p class="headline">${c.t(cp.headline)}</p>
    ${cp.lunarDate ? `<p class="lunar">${e(cp.lunarDate)}</p>` : ''}
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Tranh truyện của chúng mình')}
  <div class="strip">
    ${(mod.content.chapters || []).map((ch, i) => `
      <article class="panel">
        <span class="panel-no">${i + 1}</span>
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <div class="caption"><h3>${e(ch.title)}</h3><p>${e(ch.date)} — ${e(ch.text)}</p></div>
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Nhận lời mời')}
  <div class="dh-form">${ui.rsvpForm()}</div>
</div>`);


// Tap on empty page space (not on links, buttons, inputs, photos) → fn(x, y, event)
const onEmptyTap = (main, fn) => main.addEventListener('click', e => {
  if (e.target.closest('a, button, input, select, textarea, label, summary, details, dialog, canvas, .photo, img, iframe')) return;
  fn(e.clientX, e.pageY, e);
});
const fx = (() => { const l = document.createElement('div'); l.className = 'fx-layer'; l.setAttribute('aria-hidden', 'true'); document.body.appendChild(l); return l; })();

// ---- wow: tap empty paper to press a red seal ----
EA.afterRender((c, main) => {
  const marks = ['囍', '福', '壽', c.data.monogram.replace(/\s/g, '')];
  const stamps = [];
  onEmptyTap(main, (x, y) => {
    const s = document.createElement('span');
    s.className = 'press-seal';
    s.textContent = marks[stamps.length % marks.length];
    s.style.cssText = `left:${x}px;top:${y}px;--r:${(Math.random() * 24 - 12).toFixed(1)}deg`;
    fx.appendChild(s); stamps.push(s);
    if (stamps.length > 14) stamps.shift().remove();
  });
  main.insertAdjacentHTML('beforebegin', '<p class="stamp-hint">Chạm vào khoảng trống để đóng dấu son</p>');
});
