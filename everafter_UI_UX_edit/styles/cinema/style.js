// Rạp chiếu phim: an admission ticket; tearing the stub raises the curtain.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="curtain l" aria-hidden="true"></div>
    <div class="curtain r" aria-hidden="true"></div>
    <div class="marquee">
      <p class="now">Công chiếu một ngày duy nhất</p>
      <div class="ticket">
        <div class="main">
          <p class="adm">Vé mời · Admit one</p>
          <p class="film">${e(D.bride.short)} &amp; ${e(D.groom.short)}</p>
          <p class="sub">Chuyện chúng mình — phần tiếp theo</p>
          <dl>
            <div><dt>Ngày</dt><dd>${c.d}.${c.m}.${c.y}</dd></div>
            <div><dt>Suất</dt><dd>${e(D.events[D.events.length - 1].time)}</dd></div>
            <div><dt>Khách mời</dt><dd>${e(c.guest)}</dd></div>
          </dl>
        </div>
        <div class="stub"><span>No. ${c.d}${c.m}</span><b>VIP</b></div>
      </div>
      <button class="open-btn" type="button">Xé vé ✂</button>
    </div>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('torn');
    c.after(900, () => el.classList.add('curtains'));
    c.after(2700, open);
  }, { once: true });
});

// ---- layouts: a showtimes board and rolling credits ----
EA.section('events', ({ data: D, esc: e, ui, d, m }) => `<div class="wrap">
  ${ui.head('Now showing', 'Lịch chiếu ngày cưới')}
  <div class="board">
    <p class="board-top">Suất chiếu · ${d}/${m}</p>
    ${D.events.map(ev => `
      <article class="show">
        <p class="st">${e(ev.time)}</p>
        <div class="sd">
          <h3>${e(ev.title)}</h3>
          <p>${e(ev.place)} · ${e(ev.address)}</p>
          <p class="tag">${e(ev.label)}</p>
        </div>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('The credits', 'Kịch bản một ngày')}
  <dl class="credits">
    ${D.itinerary.map(it => `<div><dt>${e(it.time)}</dt><dd><strong>${e(it.title)}</strong><span>${e(it.note)}</span></dd></div>`).join('')}
  </dl>
  <p class="credits-end">Đạo diễn &amp; diễn viên chính<br><strong>${e(D.bride.name)} · ${e(D.groom.name)}</strong></p>
</div>`);

// ---- more layouts: film-strip gallery, "cast" contacts, trivia FAQ, THE END ----
EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('Behind the scenes', 'Hậu trường')}
  <div class="reel" tabindex="0" aria-label="Ảnh, cuộn ngang">
    ${D.photos.map((p, i) => ui.photo(p, i, `<span class="frame-no" aria-hidden="true">${String(i + 1).padStart(2, '0')}A</span>`)).join('')}
  </div>
</div>`);

EA.section('faq', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Trivia', 'Có thể bạn chưa biết')}
  ${D.faq.map((f, i) => `<details class="trivia"><summary><span class="tn">#${i + 1}</span>${e(f.q)}</summary><p>${e(f.a)}</p></details>`).join('')}
</div>`);

EA.section('contact', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Starring', 'Diễn viên chính')}
  <div class="cast">
    ${[['Cô dâu', D.bride, 1], ['Chú rể', D.groom, 2]].map(([r, p, i]) => `
      <div class="cast-card">
        <img src="${e(D.photos[i]?.src)}" alt="" loading="lazy">
        <p class="role">Vai ${r}</p>
        <p class="pname">${e(p.name)}</p>
        <a class="btn" href="tel:${e(p.phone.replace(/\s/g, ''))}">Gọi ${e(p.phone)}</a>
      </div>`).join('')}
  </div>
</div>`);

EA.section('thanks', ({ data: D, esc: e, dateText }) => `<div class="wrap narrow">
  <p class="the-end">Hết phim</p>
  <p class="eyebrow">nhưng câu chuyện chỉ vừa bắt đầu</p>
  <p class="end-note">${e(D.thanks)}</p>
  <p class="kicker">${dateText}</p>
  <button class="btn" type="button" id="reopen">Xem lại từ đầu ↺</button>
</div>`);

// ---- v3: movie-poster hero, storyboard story, box-office RSVP ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="cn-poster">
  <img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high">
  <div class="cn-poster-txt">
    <p class="cn-pre">Một câu chuyện có thật</p>
    <h1 class="cn-title">${e(cp.brideShortName)} <span>&amp;</span> ${e(cp.groomShortName)}</h1>
    <p class="headline">${c.t(cp.headline)}</p>
    <p class="cn-release">Khởi chiếu ${c.d}.${c.m}.${c.y} · ${e(cp.city)}</p>
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    <p class="cn-billing">Với sự tham gia của ${e(cp.brideName)} · ${e(cp.groomName)} · gia đình hai bên · và bạn</p>
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Storyboard', 'Những cảnh quay đầu tiên')}
  <div class="storyboard" tabindex="0" aria-label="Câu chuyện, cuộn ngang">
    ${(mod.content.chapters || []).map((ch, i) => `
      <article class="scene">
        <p class="scene-no">Cảnh ${String(i + 1).padStart(2, '0')} · ${e(ch.date)}</p>
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <h3>${e(ch.title)}</h3>
        <p>${e(ch.text)}</p>
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('Box office', 'Giữ chỗ cho bạn')}
  <div class="box-office"><p class="bo-top">Quầy vé · Vào cửa miễn phí</p>${ui.rsvpForm()}</div>
</div>`);


// ---- wow: an old film-leader countdown plays before the story; the poster flickers like a projector ----
EA.afterRender((c, main) => {
  main.querySelector('.cn-poster')?.insertAdjacentHTML('beforeend', '<span class="projector" aria-hidden="true"></span>');
  const sec = main.querySelector('.m-story'); if (!sec || c.reduced) return;
  sec.style.position = 'relative';
  const io = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return; io.disconnect();
    const lead = document.createElement('div'); lead.className = 'leader'; lead.setAttribute('aria-hidden', 'true');
    lead.innerHTML = '<span class="sweep"></span><b>3</b><i class="cross"></i>';
    sec.appendChild(lead);
    let n = 3; const b = lead.querySelector('b');
    const t = setInterval(() => { n -= 1; if (n > 0) { b.textContent = n; lead.querySelector('.sweep').style.animation = 'none'; void lead.offsetWidth; lead.querySelector('.sweep').style.animation = ''; } else { clearInterval(t); lead.classList.add('done'); setTimeout(() => lead.remove(), 600); } }, 800);
  }, { threshold: .35 });
  io.observe(sec);
});
