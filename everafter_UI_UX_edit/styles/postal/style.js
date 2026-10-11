// Bưu thiếp: an airmail envelope addressed to the guest; a postmark stamps it, then the letter slides out.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="scene">
    <div class="letter-peek">
      <p class="lp-to">Gửi ${e(c.guest)},</p>
      <p class="lp-title">Một lời mời từ chúng mình</p>
      <p class="lp-sign">${e(D.bride.short)} &amp; ${e(D.groom.short)} · ${c.d}.${c.m}.${c.y}</p>
    </div>
    <div class="env">
      <div class="stamp" aria-hidden="true"><span>♥</span><small>${c.d}.${c.m}</small></div>
      <div class="postmark" aria-hidden="true"><span>${c.d} · ${c.m} · ${c.y}</span><b>Hỷ sự</b></div>
      <p class="from"><small>Người gửi</small>${e(D.bride.short)} &amp; ${e(D.groom.short)}</p>
      <div class="addr">
        <small>Người nhận</small>
        <p>${e(c.guest)}</p>
        <span></span><span></span>
      </div>
      <p class="airmail">Par avion · Thư mời</p>
    </div>
    </div>
    <button class="open-btn" type="button">Đóng dấu &amp; mở thư</button>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('stamped');
    // stamp → letter rises out of the envelope (still behind it) → envelope drops away, letter settles in front
    c.after(800, () => el.classList.add('sliding'));
    c.after(1900, () => el.classList.add('out'));
    c.after(3000, open);
  }, { once: true });
});

// ---- layouts: postcards and a postal route ----
EA.section('events', ({ data: D, esc: e, ui, d, m }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ngày chúng mình thành đôi')}
  <div class="cards">
    ${D.events.map(ev => `
      <article class="postcard">
        <div class="msg">
          <p class="label">${e(ev.label)}</p>
          <h3>${e(ev.title)}</h3>
          <p class="hand">Hẹn gặp bạn lúc ${e(ev.time)} nhé!</p>
          ${ui.actions(ev)}
        </div>
        <div class="to-side">
          <div class="pc-stamp"><b>${e(ev.time)}</b><small>${d}.${m}</small></div>
          <p class="line">${e(ev.place)}</p>
          <p class="line">${e(ev.address)}</p>
        </div>
      </article>`).join('')}
  </div>
</div>`);

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Wedding itinerary', 'Hành trình một ngày')}
  <ol class="route">
    ${D.itinerary.map(it => `<li><span class="pm">${e(it.time)}</span><strong>${e(it.title)}</strong><span class="n">${e(it.note)}</span></li>`).join('')}
  </ol>
</div>`);

// ---- more layouts: a typed letter, postcard photos, letters-to-the-editor FAQ, address labels ----
EA.section('letter', ({ data: D, esc: e, guest, dateText }) => `<div class="wrap narrow">
  <div class="typed">
    <p class="dateline">TP.HCM, ${dateText}</p>
    <p class="salute">Gửi ${e(guest)} thân mến,</p>
    ${D.letter.slice(0, 2).map(p => `<p>${e(p)}</p>`).join('')}
    <p class="highlight">${e(D.letterHighlight)}</p>
    ${D.letter.slice(2).map(p => `<p>${e(p)}</p>`).join('')}
    <p class="sign">Thân mến,<br><span class="names">${e(D.bride.short)} <span class="amp">&amp;</span> ${e(D.groom.short)}</span></p>
    <span class="wax" aria-hidden="true">♥</span>
  </div>
</div>`);

EA.section('gallery', ({ data: D, esc: e, ui, d, m }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Bưu ảnh của chúng mình')}
  <div class="postcards">
    ${D.photos.map((p, i) => ui.photo(p, i, `<span class="pmark" aria-hidden="true">${d}.${m}<br>No.${i + 1}</span>`)).join('')}
  </div>
</div>`);

EA.section('faq', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding guide', 'Hộp thư giải đáp')}
  ${D.faq.map((f, i) => `<article class="mail"><p class="mail-no">Thư số ${i + 1}</p><h3>${e(f.q)}</h3><p>${e(f.a)}</p></article>`).join('')}
</div>`);

EA.section('contact', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Contact', 'Địa chỉ liên lạc')}
  <div class="labels">
    ${[['Cô dâu', D.bride], ['Chú rể', D.groom]].map(([r, p]) => `
      <div class="addr-label"><small>${r}</small><p>${e(p.name)}</p><a class="btn" href="tel:${e(p.phone.replace(/\s/g, ''))}">☎ ${e(p.phone)}</a></div>`).join('')}
  </div>
</div>`);

// ---- v3: giant postcard hero, stamp-collection story, reply-paid postcard RSVP ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="big-postcard">
    <img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high">
    <div class="bp-back">
      <div class="pc-stamp"><b>♥</b><small>${c.d}.${c.m}</small></div>
      <p class="label">Greetings from ${e(cp.city)}</p>
      <h1 class="couple"><span>${e(cp.brideName)}</span><span class="amp">&amp;</span><span>${e(cp.groomName)}</span></h1>
      <p class="headline">${c.t(cp.headline)}</p>
      <p class="bp-pm">${c.dow} · ${c.dateText}</p>
    </div>
  </div>
  ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Bộ tem kỷ niệm')}
  <div class="stamps">
    ${(mod.content.chapters || []).map(ch => `
      <article class="big-stamp">
        <div class="bs-img">${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}<span class="bs-date">${e(ch.date)}</span></div>
        <h3>${e(ch.title)}</h3>
        <p>${e(ch.text)}</p>
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui, esc: e, config }) => `<div class="wrap">
  ${ui.head('RSVP', 'Bưu thiếp hồi âm')}
  <div class="reply-card">
    <div class="rc-left">${ui.rsvpForm()}</div>
    <div class="rc-right" aria-hidden="true">
      <div class="pc-stamp"><b>✉</b><small>Trả lời</small></div>
      <p class="line">${e(config.couple.brideShortName)} &amp; ${e(config.couple.groomShortName)}</p>
      <p class="line">${e(config.couple.city)}</p>
      <p class="airmail-tag">Par avion</p>
    </div>
  </div>
</div>`);


// ---- wow: an airmail plane flies the route from the groom's home to the bride's ----
EA.afterRender((c, main) => {
  const host = main.querySelector('.m-hero .wrap'); if (!host) return;
  const plane = c.reduced ? '<text x="330" y="44" font-size="22">✈</text>' :
    '<text font-size="22" dy="7" text-anchor="middle">✈<animateMotion dur="7s" repeatCount="indefinite" rotate="auto"><mpath href="#air-route"/></animateMotion></text>';
  host.insertAdjacentHTML('afterbegin', `<svg class="air" viewBox="0 0 400 110" aria-hidden="true">
    <path id="air-route" d="M40 90 C110 10 290 10 360 80" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 7"/>
    <circle cx="40" cy="90" r="6"/><circle cx="360" cy="80" r="6"/>
    <text x="40" y="108" text-anchor="middle" class="lbl">Nhà trai</text><text x="360" y="100" text-anchor="middle" class="lbl">Nhà gái</text>
    ${plane}</svg>`);
});
