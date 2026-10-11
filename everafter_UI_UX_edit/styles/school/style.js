// Học đường: a folded note passed in class unfolds into the invitation.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="desk">
      <div class="fold-note">
        <div class="note-body">
          <p class="n-to">Gửi ${e(c.guest)},</p>
          <p>Hồi đó ngồi chung bàn, tụi mình chuyền giấy suốt giờ Toán…</p>
          <p class="n-big">Giờ tụi mình cưới thật rồi nè!</p>
          <p class="n-date">${c.dow}, ${c.d}.${c.m}.${c.y}</p>
          <p class="n-sign">— ${e(D.bride.short)} &amp; ${e(D.groom.short)} <span aria-hidden="true">♡</span></p>
        </div>
        <div class="note-front" aria-hidden="true"><span>Gửi ${e(c.guest)}</span><i>đừng để cô thấy nha!</i></div>
      </div>
      <button class="open-btn" type="button">Mở mẩu giấy</button>
    </div>`;
  el.querySelector('.open-btn').addEventListener('click', () => {
    el.classList.add('unfold1');
    c.after(700, () => el.classList.add('unfold2'));
    c.after(2900, open);
  }, { once: true });
});

// ---- layouts ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="board">
    <p class="board-date">${c.dow}, ngày ${+c.d} tháng ${+c.m}</p>
    <p class="board-class">Lớp 12A1 · Bài học cuối cùng</p>
    <h1 class="chalk-names">${e(cp.brideName)} <span>+</span> ${e(cp.groomName)}</h1>
    <p class="chalk-line">${c.t(cp.headline)}</p>
    <figure class="id-photo"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"><figcaption>Ảnh thẻ · ${c.y}</figcaption></figure>
    <div class="chalk-count"><p>Còn</p>${ui.countdown()}<p>là tới ngày cưới!</p></div>
    <span class="eraser" aria-hidden="true"></span><span class="chalk-stick" aria-hidden="true"></span>
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Học bạ tình yêu', 'Sổ liên lạc của chúng mình')}
  <div class="report">
    <div class="report-row report-head"><span>Năm</span><span>Nội dung</span><span>Nhận xét của giáo viên</span></div>
    ${(mod.content.chapters || []).map(ch => `
      <div class="report-row">
        <span class="yr">${e(ch.date)}</span>
        <span><strong>${e(ch.title)}</strong></span>
        <span class="red-pen">${e(ch.text)}</span>
      </div>`).join('')}
    <p class="grade" aria-label="Xếp loại: Xuất sắc">Xếp loại<br><b>Xuất sắc</b></p>
  </div>
</div>`);

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Thời khoá biểu', 'Lịch học ngày cưới')}
  <div class="timetable">
    ${D.events.map((ev, i) => `
      <article class="period">
        <p class="tiet">Tiết ${i + 1}</p>
        <p class="p-time">${e(ev.time)}</p>
        <div class="p-body">
          <h3>${e(ev.title)}</h3>
          <p>${e(ev.place)} · ${e(ev.address)}</p>
          <p class="p-label">${e(ev.label)}</p>
        </div>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Điểm danh nào!')}
  <div class="roll">
    <p class="roll-title">Sổ điểm danh · Lớp tình yêu</p>
    ${ui.rsvpForm().replace('Mình sẽ đến', 'Có mặt! ✋').replace('Tiếc quá, mình không đến được', 'Vắng mặt (có phép)').replace('Gửi phản hồi', 'Nộp bài')}
  </div>
</div>`);

EA.section('guestbook', ({ esc: e, ui, mod }) => `<div class="wrap narrow">
  ${ui.head('Lưu bút', 'Viết lưu bút cho tụi mình')}
  <div class="yearbook">
    ${mod.content.prompt ? `<p class="yb-prompt">${e(mod.content.prompt)}</p>` : ''}
    ${ui.wishForm()}
    <ul class="wish-list"></ul>
  </div>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('Kỷ yếu', 'Ảnh kỷ yếu của hai đứa')}
  <div class="yb-grid">${D.photos.map((p, i) => ui.photo(p, i, '<span class="sticker" aria-hidden="true">★</span>')).join('')}</div>
</div>`);


// ---- wow: guests can doodle on the chalkboard with a finger ----
EA.afterRender((c, main) => {
  const board = main.querySelector('.board'); if (!board) return;
  board.insertAdjacentHTML('beforeend', `<canvas class="chalk-pad" aria-label="Bảng đen, vẽ bằng ngón tay khi bật chế độ vẽ"></canvas>
    <div class="chalk-tools"><button type="button" class="ct draw" aria-pressed="false">✏️ Vẽ lên bảng</button><button type="button" class="ct wipe">🧽 Xoá</button></div>`);
  const cv = board.querySelector('.chalk-pad'), g = cv.getContext('2d');
  const fit = () => { const r = board.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); cv.width = r.width * d; cv.height = r.height * d; g.setTransform(d, 0, 0, d, 0, 0); };
  fit(); new ResizeObserver(fit).observe(board);
  let on = false, down = false, last = null;
  const drawBtn = board.querySelector('.draw');
  drawBtn.addEventListener('click', () => { on = !on; board.classList.toggle('drawing', on); drawBtn.setAttribute('aria-pressed', on); drawBtn.textContent = on ? '✋ Xong' : '✏️ Vẽ lên bảng'; });
  board.querySelector('.wipe').addEventListener('click', () => g.clearRect(0, 0, cv.width, cv.height));
  const pt = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  cv.addEventListener('pointerdown', e => { if (!on) return; down = true; last = pt(e); cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => {
    if (!down) return; const p = pt(e);
    g.strokeStyle = 'rgba(245,245,235,.85)'; g.lineWidth = 3.2; g.lineCap = 'round';
    g.beginPath(); g.moveTo(...last); g.lineTo(...p); g.stroke();
    g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(p[0] + Math.random() * 3 - 1.5, p[1] + Math.random() * 3 - 1.5, 1.2, 1.2); // chalk dust
    last = p;
  });
  cv.addEventListener('pointerup', () => { down = false; });
});
