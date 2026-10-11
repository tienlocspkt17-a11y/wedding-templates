// Sơn mài Hỷ: a red lacquer box; the gold seal lifts and the two doors slide apart.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="box">
      <div class="glow">
        <p class="k">Lễ thành hôn</p>
        <p class="n">${e(D.bride.name)}<br><span>&amp;</span><br>${e(D.groom.name)}</p>
        <p class="k">${c.dateText}</p>
      </div>
      <div class="door l"></div>
      <div class="door r"></div>
      <div class="seal"><span>囍</span></div>
      <div class="to">
        <p>Trân trọng kính mời</p>
        <p class="g">${e(c.guest)}</p>
        <button class="open-btn" type="button">Mở thiệp</button>
      </div>
    </div>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('opening');
    c.after(2200, open);
  }, { once: true });
});

// ---- layouts: a traditional printed thiệp ----
EA.section('announce', ({ data: D, esc: e, dow, d, m, y }) => `<div class="wrap">
  <div class="thiep">
    <div class="side">
      <p class="label">Nhà trai</p>
      <p>Ông ${e(D.groomFamily.father)}</p><p>Bà ${e(D.groomFamily.mother)}</p>
      <p class="addr">${e(D.groomFamily.address)}</p>
    </div>
    <div class="center">
      <p class="hy" aria-hidden="true">囍</p>
      <p class="kicker">Trân trọng báo tin lễ thành hôn của con chúng tôi</p>
      <h2 class="couple"><span>${e(D.groom.name)}</span><span class="amp">&amp;</span><span>${e(D.bride.name)}</span></h2>
      <p class="note">${e(D.announceNote)}</p>
      <p class="lunar">${dow} · ngày ${d} tháng ${+m} năm ${y}</p>
    </div>
    <div class="side">
      <p class="label">Nhà gái</p>
      <p>Ông ${e(D.brideFamily.father)}</p><p>Bà ${e(D.brideFamily.mother)}</p>
      <p class="addr">${e(D.brideFamily.address)}</p>
    </div>
  </div>
</div>`);

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding itinerary', 'Một ngày thật vui')}
  <ol class="scroll-line">
    ${D.itinerary.map(it => `<li><time>${e(it.time)}</time><div><strong>${e(it.title)}</strong><span>${e(it.note)}</span></div></li>`).join('')}
  </ol>
</div>`);

// ---- more layouts: formal ceremony cards, gold triptych, red seal ending ----
EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Trân trọng kính mời')}
  <div class="ceremonies">
    ${D.events.map(ev => `
      <article class="ceremony">
        <p class="hy-sm" aria-hidden="true">囍</p>
        <h3>${e(ev.title)}</h3>
        <p class="label">${e(ev.label)}</p>
        <p class="when">Vào lúc <b>${e(ev.time)}</b><br>${ui.evDate(ev).split('· ')[1]}</p>
        <p class="where">Tại <b>${e(ev.place)}</b><br>${e(ev.address)}</p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Khoảnh khắc của chúng mình')}
  <div class="triptych">${D.photos.map((p, i) => ui.photo(p, i)).join('')}</div>
</div>`);

EA.section('thanks', ({ data: D, esc: e, dateText }) => `<div class="wrap narrow">
  <div class="seal-end" aria-hidden="true"><span>囍</span></div>
  <p class="eyebrow">Đa tạ</p>
  <p class="mono">${e(D.monogram)}</p>
  <p>${e(D.thanks)}</p>
  <p class="kicker">${dateText}</p>
  <button class="btn" type="button" id="reopen">Mở lại tấm thiệp ↺</button>
</div>`);

// ---- v3: symmetric portrait hero, gold-ringed scroll story, red-envelope RSVP ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="lq-hero">
    <p class="lq-hy" aria-hidden="true">囍</p>
    <div class="lq-row">
      <p class="lq-name">${e(cp.groomName)}</p>
      <div class="lq-portrait"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></div>
      <p class="lq-name">${e(cp.brideName)}</p>
    </div>
    <p class="kicker">Lễ thành hôn · ${c.dow} · ${c.dateText}</p>
    ${cp.lunarDate ? `<p class="lunar">${e(cp.lunarDate)}</p>` : ''}
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Duyên lành')}
  <ol class="lq-story">
    ${(mod.content.chapters || []).map(ch => `
      <li>
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <div><p class="label">${e(ch.date)}</p><h3>${e(ch.title)}</h3><p>${e(ch.text)}</p></div>
      </li>`).join('')}
  </ol>
  ${mod.content.quote ? `<p class="story-quote">“${e(mod.content.quote)}”</p>` : ''}
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Hồi đáp')}
  <div class="red-envelope"><span class="re-seal" aria-hidden="true">囍</span><div class="re-paper">${ui.rsvpForm()}</div></div>
</div>`);


// ---- wow: gold-foil shimmer on the red bands + swaying lanterns ----
EA.afterRender((c, main) => {
  main.querySelectorAll('.sec:nth-child(even) .couple, .sec:nth-child(even) .title, .lq-name, .seal-end').forEach(el => el.classList.add('foil'));
  const lantern = side => `<span class="lantern ${side}" aria-hidden="true"><i class="cord"></i><i class="body"><b>囍</b></i><i class="tassel"></i></span>`;
  const ann = main.querySelector('.m-families');
  ann?.insertAdjacentHTML('afterbegin', lantern('l') + lantern('r'));
});
