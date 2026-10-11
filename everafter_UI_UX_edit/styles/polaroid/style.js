// Polaroid: a blank instant photo on the table; tapping it lets the picture develop.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="table">
      <figure class="pol">
        <span class="tape" aria-hidden="true"></span>
        <div class="shot"><img src="${e(D.photos[1]?.src || D.photos[0]?.src)}" alt=""></div>
        <figcaption>
          <span class="to">gửi ${e(c.guest)} ♡</span>
          <span class="date">${e(D.bride.short)} &amp; ${e(D.groom.short)} · ${c.d}.${c.m}.${c.y.slice(2)}</span>
        </figcaption>
      </figure>
      <p class="hint">Chạm để rửa ảnh</p>
      <button class="open-btn" type="button">Rửa ảnh</button>
    </div>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('developing');
    c.after(3000, open);
  }, { once: true });
});

// ---- layouts: a corkboard and a handwritten checklist ----
EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Khoảnh khắc của chúng mình')}
  <div class="board">
    ${D.photos.map((p, i) => ui.photo(p, i, '<span class="pin" aria-hidden="true"></span>')).join('')}
  </div>
</div>`);

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding itinerary', 'Một ngày thật vui')}
  <div class="notepad">
    <p class="pad-title">Việc cần làm ngày ${e(D.date.split('-').reverse().join('/'))} ✎</p>
    <ul class="todo">
      ${D.itinerary.map(it => `<li><span class="box" aria-hidden="true"></span><time>${e(it.time)}</time> <strong>${e(it.title)}</strong> <span class="n">— ${e(it.note)}</span></li>`).join('')}
    </ul>
  </div>
</div>`);

// ---- more layouts: taped index cards, sticky notes, a text-message FAQ, phone contacts ----
EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ghi vào lịch nhé!')}
  <div class="index-cards">
    ${D.events.map((ev, i) => `
      <article class="icard">
        <span class="tape" aria-hidden="true"></span>
        <p class="when">${e(ev.time)} <small>${ui.evDate(ev).split('· ')[1]}</small></p>
        <h3>${e(ev.title)}</h3>
        <p>Tại ${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('notes', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Dress code &amp; notes', 'Nhớ giùm chúng mình nha')}
  <div class="stickies">
    <div class="sticky palette"><p class="st-title">Mặc màu gì?</p>
      <ul>${D.dressCode.map(s => `<li><span class="dot" style="background:${e(s.color)}"></span>${e(s.name)}</li>`).join('')}</ul>
    </div>
    ${D.notes.map(n => `<div class="sticky"><p>${e(n)}</p></div>`).join('')}
  </div>
</div>`);

EA.section('faq', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding guide', 'Bạn hỏi, chúng mình trả lời')}
  <div class="chat">
    ${D.faq.map(f => `<p class="bubble me">${e(f.q)}</p><p class="bubble them">${e(f.a)}</p>`).join('')}
  </div>
</div>`);

// ---- v3: giant polaroid hero, scrapbook story, notebook RSVP ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="pl-hero">
    <figure class="pl-big"><span class="tape" aria-hidden="true"></span>
      <img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high">
      <figcaption>${e(cp.brideShortName)} ♡ ${e(cp.groomShortName)}</figcaption>
    </figure>
    <div class="pl-note">
      <p class="scribble">sắp cưới rồi!!</p>
      <h1 class="couple"><span>${e(cp.brideName)}</span><span class="amp">&amp;</span><span>${e(cp.groomName)}</span></h1>
      <p class="headline">${c.t(cp.headline)}</p>
      <p class="circled">${c.d}.${c.m}.${c.y}</p>
      ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    </div>
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Cuốn sổ của chúng mình')}
  <div class="scrapbook">
    ${(mod.content.chapters || []).map(ch => `
      <article class="scrap">
        ${ch.image ? `<figure class="mini-pol"><img src="${e(ch.image)}" alt="" loading="lazy"><figcaption>${e(ch.date)}</figcaption></figure>` : ''}
        <div class="scrap-note"><h3>${e(ch.title)}</h3><p>${e(ch.text)}</p></div>
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Điền giúp chúng mình nhé')}
  <div class="notebook"><span class="rings" aria-hidden="true"></span>${ui.rsvpForm()}</div>
</div>`);


// ---- wow: polaroids on the corkboard can be dragged around ----
EA.afterRender((c, main) => {
  const board = main.querySelector('.board'); if (!board) return;
  board.insertAdjacentHTML('beforebegin', '<p class="drag-note">✎ kéo ảnh để sắp xếp lại bảng ghim nhé</p>');
  let moved = false;
  board.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  let z = 5;
  board.querySelectorAll('.photo').forEach(p => {
    let start = null, pos = { x: 0, y: 0 };
    p.style.touchAction = 'none';
    p.addEventListener('pointerdown', e => { start = { x: e.clientX - pos.x, y: e.clientY - pos.y, ox: e.clientX, oy: e.clientY }; p.setPointerCapture(e.pointerId); p.style.zIndex = ++z; p.classList.add('lifted'); moved = false; });
    p.addEventListener('pointermove', e => {
      if (!start) return;
      if (Math.abs(e.clientX - start.ox) + Math.abs(e.clientY - start.oy) > 6) moved = true;
      pos = { x: e.clientX - start.x, y: e.clientY - start.y };
      p.style.translate = `${pos.x}px ${pos.y}px`;
    });
    const end = () => { start = null; p.classList.remove('lifted'); };
    p.addEventListener('pointerup', end); p.addEventListener('pointercancel', end);
  });
});
