// Thiệp hồng: a wax-sealed red envelope at the top of the page. Tapping it lifts the flap and the
// wedding photo slides out; the envelope stays as the page header. All artwork here is original
// (CSS/SVG), recreating the familiar Vietnamese red-envelope invitation style.

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- original artwork ----------
const FLORAL = `<svg class="floral" viewBox="0 0 160 110" aria-hidden="true">
  <g fill="none" stroke="#9b8657" stroke-width="1.3" stroke-linecap="round">
    <path d="M2 4 C40 10 70 26 96 52 C112 68 128 80 158 86"/>
    <path d="M30 12 C36 26 34 40 24 52"/><path d="M62 30 C74 34 80 46 78 60"/><path d="M104 60 C104 72 98 82 88 90"/>
  </g>
  <g fill="#b7a578">
    <ellipse cx="22" cy="8" rx="9" ry="3.6" transform="rotate(18 22 8)"/><ellipse cx="46" cy="20" rx="9" ry="3.4" transform="rotate(34 46 20)"/>
    <ellipse cx="34" cy="34" rx="8" ry="3.2" transform="rotate(-70 34 34)"/><ellipse cx="80" cy="44" rx="9" ry="3.4" transform="rotate(50 80 44)"/>
    <ellipse cx="78" cy="58" rx="8" ry="3" transform="rotate(-80 78 58)"/><ellipse cx="118" cy="72" rx="9" ry="3.2" transform="rotate(26 118 72)"/>
    <ellipse cx="100" cy="80" rx="7" ry="3" transform="rotate(-60 100 80)"/><ellipse cx="140" cy="82" rx="8" ry="3" transform="rotate(10 140 82)"/>
  </g>
  ${[[24, 52, 7], [66, 30, 5.5], [90, 90, 6.5], [128, 78, 4.5], [8, 26, 4]].map(([x, y, r]) =>
    `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="${r * .55}" ry="${r}" cy="${-r * .8}" transform="rotate(${a})" fill="#f4efe6" stroke="#cbbd97" stroke-width=".6"/>`).join('')}<circle r="${r * .38}" fill="#c9a45c"/></g>`).join('')}
</svg>`;
const ROSE = `<svg viewBox="0 0 40 40" aria-hidden="true"><g fill="none" stroke="#8a6526" stroke-width="1.4" stroke-linecap="round">
  <path d="M20 20 c2 -2 4 0 2 2 c-3 3 -7 0 -5 -4 c3 -5 10 -3 10 3 c0 7 -9 10 -14 5 c-6 -6 -1 -16 8 -15 c9 1 13 11 8 18"/>
  <path d="M12 30 c3 2 7 3 11 2"/><path d="M10 12 c-2 3 -2 6 -1 9"/>
</g></svg>`;
// scalloped wax edge
const SEAL_CLIP = `polygon(${Array.from({ length: 48 }, (_, i) => { const a = i / 48 * Math.PI * 2, r = i % 2 ? 46 : 50; return `${(50 + Math.cos(a) * r).toFixed(2)}% ${(50 + Math.sin(a) * r).toFixed(2)}%`; }).join(',')})`;
const ICONS = {
  car: '<path d="M3 14l2-5.5h14L21 14v4.5h-2.5v-2h-13v2H3z"/><circle cx="7.5" cy="14.5" r="1.2"/><circle cx="16.5" cy="14.5" r="1.2"/>',
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-5h4v5"/>',
  ring: '<circle cx="12" cy="14.5" r="5.5"/><path d="M9 5.5 12 3l3 2.5-3 3z"/>',
  camera: '<rect x="3" y="7.5" width="18" height="12" rx="2"/><circle cx="12" cy="13.5" r="3.4"/><path d="M8.5 7.5 10 5h4l1.5 2.5"/>',
  cake: '<path d="M4 20h16v-7H4z"/><path d="M4 16.5c2.5 1.5 4.5 1.5 6 0s4-1.5 6 0 3 1 4 .5"/><path d="M12 13V9.5"/><path d="M12 5.5c1 1 1 2.2 0 2.8-1-.6-1-1.8 0-2.8z"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'
};
const ICON_ORDER = ['car', 'home', 'car', 'ring', 'camera', 'cake'];
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">${ICONS[name] || ICONS.heart}</svg>`;
const HY = '<span class="hy" aria-hidden="true">囍</span>';
const HEARTS = Array.from({ length: 22 }, (_, i) =>
  `<span class="fh ${i % 4 === 0 ? 'o' : ''}" style="--x:${(i * 47) % 100}%;--d:${10 + (i % 7)}s;--delay:-${(i * 1.9) % 14}s;--s:${.45 + (i % 5) * .22}"></span>`).join('');
const CORNERS = '<span class="orn tl"></span><span class="orn tr"></span><span class="orn bl"></span><span class="orn br"></span>';

document.body.insertAdjacentHTML('afterbegin', `<div class="hearts" aria-hidden="true">${HEARTS}</div>`);
document.documentElement.classList.add('rs-page');

// ---------- 0. intro cover screen (fullscreen wax-sealed red envelope) ----------
EA.cover((el, c, open) => {
  const { config: { couple: cp }, esc: e } = c;
  el.classList.add('rs-cover');
  el.innerHTML = `
    <div class="rs-cover-inner">
      ${FLORAL}${FLORAL.replace('class="floral"', 'class="floral r"')}
      <p class="rs-kicker">Thiệp</p>
      <h1 class="rs-title">Mời Cưới</h1>
      <button class="env-btn open-btn" type="button" aria-label="Chạm vào thiệp để mở">
        <span class="env" aria-hidden="true">
          <span class="env-back"></span>
          <span class="env-photo"><img src="${e(cp.heroImage)}" alt="" fetchpriority="high"></span>
          <span class="env-front"></span>
          <span class="env-flap"></span>
          <span class="wax" style="clip-path:${SEAL_CLIP}">${ROSE}</span>
        </span>
      </button>
      <p class="tap">Chạm vào thiệp để mở</p>
      <p class="rs-names">${e(cp.groomName)} <span class="heart">${icon('heart')}</span> ${e(cp.brideName)}</p>
      <p class="rs-date">${HY}<b>${c.d}.${c.m}.${c.y}</b>${HY}</p>
    </div>`;

  const btn = el.querySelector('.env-btn');
  const inner = el.querySelector('.rs-cover-inner');
  btn?.addEventListener('click', () => {
    if (inner.classList.contains('is-open')) return;
    EA.music();
    inner.classList.add('opening');
    c.after(650, () => inner.classList.add('is-open'));
    c.after(1200, open);
  }, { once: true });
});

// ---------- 1. wedding announcement & portrait header inside the invitation ----------
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e } = c;
  return `<div class="rs-hero">
  ${FLORAL}${FLORAL.replace('class="floral"', 'class="floral r"')}
  <p class="rs-kicker">Lễ Thành Hôn</p>
  <h1 class="rs-hero-title">${e(cp.groomName)} &amp; ${e(cp.brideName)}</h1>
  <figure class="rs-hero-photo">
    <img src="${e(cp.heroImage)}" alt="${e(cp.groomName)} và ${e(cp.brideName)}" fetchpriority="high">
  </figure>
  <p class="rs-tagline">${e(cp.headline || 'Hai con người, một hành trình, và một ngày chúng mình muốn có bạn ở bên.')}</p>
  <p class="rs-date">${HY}<b>${c.d}.${c.m}.${c.y}</b>${HY}</p>
</div>`;
});

// ---------- 2. families, names, portrait, three photos ----------
EA.section('families', ({ data: D, esc: e, config: { couple: cp } }) => {
  const p = D.photos;
  return `<div class="rs-fam-block">
  <div class="rs-banner" aria-hidden="true"><i class="hole"></i><span>囍</span></div>
  <div class="rs-fam-right">
    <p class="rs-vert">Thiệp<br>Mời<br>Cưới</p>
    <div class="rs-fams">
      <p class="lbl">Nhà trai:</p><p>Ông: ${e(D.groomFamily.father)}</p><p>Bà: ${e(D.groomFamily.mother)}</p>
      <hr>
      <p class="lbl">Nhà gái:</p><p>Ông: ${e(D.brideFamily.father)}</p><p>Bà: ${e(D.brideFamily.mother)}</p>
    </div>
  </div>
</div>
<div class="rs-pair">
  <p class="n1">${e(D.groom.name)}</p><p class="amp">&amp;</p><p class="n2">${e(D.bride.name)}</p>
</div>
<figure class="rs-portrait"><img src="${e(p[0]?.src || cp.heroImage)}" alt="" loading="lazy"></figure>
<p class="rs-tagline">${e(cp.headline)}</p>
<div class="rs-trio">${p.slice(1, 4).map((ph, i) => `<img src="${e(ph.src)}" alt="" loading="lazy" style="--i:${i}">`).join('')}</div>`;
});

// ---------- 3. invitation ----------
EA.section('invitation', ({ data: D, t, mod }) => `<div class="wrap narrow">
  <p class="rs-h">Trân trọng kính mời!</p>
  ${D.letter.map(p => `<p class="rs-p">${t(p)}</p>`).join('')}
</div>`);

// ---------- 4. events with an in-place Nhà gái / Nhà trai switch ----------
const DOWS = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
// An event may have its own "date" (YYYY-MM-DD); otherwise it uses the wedding date.
const evDate = (ev, c) => {
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(ev.date || '') ? ev.date : c.data.date;
  const [y, m, d] = iso.split('-');
  return { y, m, d, dow: DOWS[new Date(`${iso}T12:00:00+07:00`).getUTCDay()] };
};

EA.section('events', c => {
  const { data: D, esc: e, ui, side } = c;
  const showTabs = side === 'all' && D.hasSides;
  return `<div class="wrap narrow">
  ${showTabs ? `<div class="rs-tabs" role="tablist" aria-label="Chọn nhà">
    <button type="button" role="tab" data-tab="bride" aria-selected="true">Nhà gái</button>
    <button type="button" role="tab" data-tab="groom" aria-selected="false">Nhà trai</button>
  </div>` : ''}
  <div class="rs-evcard" data-show="${side === 'groom' ? 'groom' : 'bride'}">
    ${D.events.map(ev => { const { y, m, d, dow } = evDate(ev, c); return `
      <article class="rs-ev" data-side="${e(ev.side || 'both')}">
        <h3>${e(ev.title)}</h3>
        <p class="at">Vào lúc: ${e(ev.time)}</p>
        <p class="dow">${dow}</p>
        <p class="strip">Tháng ${m} <i>|</i> <b>${d}</b> <i>|</i> ${y}</p>
        ${ev.lunar ? `<p class="lunar">(${e(ev.lunar)})</p>` : ''}
        <p class="addr">${e(ev.address)}</p>
        <a class="map" href="${ui.mapUrl(ev)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/></svg>Xem bản đồ</a>
      </article>`; }).join('')}
  </div>
</div>`;
});

// ---------- 5. dress code ----------
EA.section('dressCode', ({ data: D, esc: e }) => `<div class="wrap narrow">
  <p class="rs-h">Dress code</p>
  <p class="rs-sub">Màu sắc trang phục gợi ý</p>
  <ul class="rs-swatches">${D.dressCode.map(s => `<li style="background:${e(s.color)}" title="${e(s.name)}"><span class="sr-only">${e(s.name)}</span></li>`).join('')}</ul>
</div>`);

// ---------- 6. calendar + countdown ----------
EA.section('saveDate', c => {
  const { y, m, d, ui, data: D, esc: e } = c;
  const first = new Date(Date.UTC(+y, +m - 1, 1)).getUTCDay();
  const days = new Date(Date.UTC(+y, +m, 0)).getUTCDate();
  const lead = (first + 6) % 7;
  const cells = [...Array(lead).fill(''), ...Array.from({ length: days }, (_, i) => i + 1)];
  return `<div class="wrap narrow">
  <div class="rs-cal-head"><p class="rs-script">Tháng ${m}</p><p class="yr">${y}</p></div>
  <div class="rs-cal" style="--bgimg:url('${e(D.photos[2]?.src || c.config.couple.heroImage)}')">
    <div class="rs-cal-grid" role="table" aria-label="Tháng ${+m} năm ${y}">
      ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((w, i) => `<span class="w${i > 4 ? ' we' : ''}">${w}</span>`).join('')}
      ${cells.map((n, i) => `<span class="${(i % 7) > 4 ? 'we' : ''}${n === +d ? ' on' : ''}">${n === +d ? `${n}<i>${icon('heart')}</i>` : n ? String(n).padStart(2, '0') : ''}</span>`).join('')}
    </div>
  </div>
  <p class="rs-hearts" aria-hidden="true">${Array.from({ length: 7 }, (_, i) => `<span class="${i % 2 ? 'o' : ''}">${icon('heart')}</span>`).join('')}</p>
  <p class="rs-count-lead">Cùng đếm ngược thời gian với chúng tôi nha!</p>
  ${ui.countdown()}
</div>`;
});

// ---------- 7. timeline ----------
EA.section('schedule', ({ data: D, esc: e }) => `<div class="wrap narrow">
  <p class="rs-script big">Timeline</p>
  <ol class="rs-tl">
    ${D.itinerary.map((it, i) => `<li><time>${e(it.time)}</time><span class="ic">${icon(it.icon || ICON_ORDER[i % ICON_ORDER.length])}</span><span class="tt">${e(it.title)}</span></li>`).join('')}
  </ol>
</div>`);

// ---------- 8. guestbook: sign, place the signature on the photo, write a wish ----------
EA.section('guestbook', ({ data: D, esc: e, config }) => `<div class="wrap narrow">
  <p class="rs-kicker">Sổ lưu bút</p>
  <p class="rs-script big">Gửi Lời Chúc</p>
  <p class="rs-divider" aria-hidden="true"><span>${icon('heart')}</span></p>
  <p class="rs-italic">Những lời chúc mừng hạnh phúc</p>
  <div class="rs-book">
    <div class="board"><img src="${e(D.photos[3]?.src || config.couple.heroImage)}" alt="Ảnh để khách ký tên"><div class="sigs"></div><p class="board-hint">Hãy là người đầu tiên ký tên!</p></div>
    <div class="place-bar" hidden>
      <label>Cỡ chữ ký <input type="range" min="14" max="50" step="1" aria-label="Cỡ chữ ký"></label>
      <div class="row"><button class="btn ghost" type="button" data-act="redo">Ký lại</button><button class="btn" type="button" data-act="here">Đặt ở đây</button></div>
    </div>
    <button class="btn sign-btn" type="button">${icon('heart')} Ký tên</button>
    <p class="steps"><b>1</b> Ký tên · <b>2</b> Chọn vị trí · <b>3</b> Viết lời chúc &amp; gửi</p>
    <ul class="rs-wishes"></ul>
  </div>
  <dialog class="sig-dlg">
    <form method="dialog" class="sig-step s1">
      <p class="rs-h">Ký tên của bạn</p>
      <canvas class="pad" width="600" height="300" aria-label="Khung ký tên, dùng ngón tay hoặc chuột để ký"></canvas>
      <div class="row"><button class="btn ghost" type="button" data-act="clear">Ký lại</button><button class="btn" type="button" data-act="next">Tiếp tục</button></div>
      <button class="x" value="cancel" aria-label="Đóng">×</button>
    </form>
    <form method="dialog" class="sig-step s3" hidden>
      <p class="rs-h">Lời chúc</p>
      <label class="field"><span>Tên của bạn</span><input name="name" required maxlength="60" autocomplete="name"></label>
      <label class="field"><span>Lời chúc</span><textarea name="message" rows="3" required maxlength="300"></textarea></label>
      <p class="form-error" role="alert" hidden></p>
      <button class="btn" type="button" data-act="send">Gửi lời chúc</button>
      <button class="x" value="cancel" aria-label="Đóng">×</button>
    </form>
  </dialog>
</div>`);

// ---------- 9. album: magazine mosaic with the title inside the grid ----------
// Slots for the first photos; the rest continue in pairs.
const ALBUM_SLOTS = ['full', 'third', 'TITLE', 'tall', 'wide', 'side', 'half', 'half', 'half', 'half', 'full'];
EA.section('gallery', ({ data: D, ui }) => {
  let i = 0;
  const cells = ALBUM_SLOTS.map(slot => slot === 'TITLE'
    ? '<div class="alb-title"><p class="rs-script big">Album</p><span></span><p class="alb-sub">Ảnh cưới</p></div>'
    : (D.photos[i] ? `<div class="alb ${slot}">${ui.photo(D.photos[i], i++)}</div>` : '')).join('');
  const rest = D.photos.slice(i).map((p, k) => `<div class="alb half">${ui.photo(p, i + k)}</div>`).join('');
  return `<div class="rs-album">${cells}${rest}</div>`;
});

// ---------- 10. RSVP ----------
EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  <div class="rs-frame">${CORNERS}
    <p class="rs-thin">Xác Nhận Tham Dự</p>
    <div class="rs-rsvp">${ui.rsvpForm()
      .replace('Mình sẽ đến', `<i class="ok">${'✓'}</i><small>Có, tôi sẽ</small> tham dự`)
      .replace('Tiếc quá, mình không đến được', `<i class="no">✕</i><small>Rất tiếc,</small> chưa sắp xếp được`)}</div>
  </div>
</div>`);

// ---------- 11. gift: a red packet with coins falling in; tap opens the QR sheet ----------
const DL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 4v11"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/></svg>';
EA.section('gift', ({ esc: e, mod, config: { couple: cp } }) => {
  const accs = mod.content.accounts || [];
  const byRole = r => accs.find(a => (a.role || '').toLowerCase().includes(r));
  const col = (label, a, name) => a ? `
    <div class="qr-col">
      <p class="qr-lbl">${label}</p>
      <div class="qr-card">${a.qr ? `<img src="${e(a.qr)}" alt="Mã QR chuyển khoản ${e(a.bank)}">` : `<div class="qr-none"><b>${e(a.bank)}</b><span>${e(a.number)}</span><small>${e(a.owner)}</small></div>`}</div>
      ${a.qr ? `<a class="qr-dl" href="${e(a.qr)}" download>${DL_ICON} Tải mã QR</a>` : `<button class="qr-dl" type="button" data-copy="${e(a.number.replace(/\s/g, ''))}">${DL_ICON} Sao chép số TK</button>`}
      <p class="qr-name">${e(name)}</p>
    </div>` : '';
  return `<div class="wrap narrow">
  <div class="rs-frame">${CORNERS}
    <p class="rs-thin">Hộp Mừng Cưới</p>
    <button class="packet-btn" type="button" aria-haspopup="dialog" aria-label="Mở hộp mừng cưới">
      <span class="coins" aria-hidden="true">${Array.from({ length: 6 }, (_, i) => `<i style="--i:${i}">$</i>`).join('')}</span>
      <span class="packet" aria-hidden="true"><span class="p-roof"></span><span class="p-ring"><span>囍</span></span><i class="d1"></i><i class="d2"></i><i class="d3"></i><i class="d4"></i></span>
    </button>
    <p class="rs-p small">${e(mod.content.message || 'Sự hiện diện của bạn là món quà quý giá nhất đối với chúng tôi')}</p>
  </div>
  <dialog class="gift-dlg" aria-label="Mừng cưới">
    <button class="gift-x" type="button" aria-label="Đóng">×</button>
    <p class="gift-title">Mừng Cưới</p>
    <div class="qr-cols">${col('Chú rể', byRole('rể') || accs[1], cp.groomName)}${col('Cô dâu', byRole('dâu') || accs[0], cp.brideName)}</div>
  </dialog>
</div>`;
});

// ---------- 12. closing photo ----------
EA.section('thanks', ({ esc: e, mod, config }) => `<figure class="rs-end">
  <img src="${e(mod.content.image || config.couple.heroImage)}" alt="" loading="lazy">
  <figcaption>Rất hân hạnh được đón tiếp</figcaption>
  <button class="rs-reopen" type="button" id="reopen" aria-label="Về đầu trang">↑</button>
</figure>`);

// ---------- behaviour ----------
EA.afterRender((c, main) => {
  // legacy inline envelope fallback (if present in custom snapshot)
  const top = main.querySelector('.rs-top');
  const btn = top?.querySelector('.env-btn');
  btn?.addEventListener('click', () => {
    if (top.classList.contains('is-open')) return;
    EA.music();
    top.classList.add('opening');
    document.documentElement.classList.remove('locked');
    c.after(650, () => top.classList.add('is-open'));
    c.after(1000, () => { btn.disabled = true; });
  });
  main.querySelector('#reopen')?.addEventListener('click', () => scrollTo({ top: 0, behavior: c.reduced ? 'auto' : 'smooth' }), { capture: true });

  // Nhà gái / Nhà trai tabs
  main.querySelectorAll('.rs-tabs').forEach(tabs => tabs.addEventListener('click', ev => {
    const b = ev.target.closest('[data-tab]'); if (!b) return;
    tabs.querySelectorAll('[data-tab]').forEach(x => x.setAttribute('aria-selected', x === b));
    tabs.nextElementSibling.dataset.show = b.dataset.tab;
  }));

  // staggered reveal for the trio of photos and timeline rows
  if ('IntersectionObserver' in window && !c.reduced) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('seen'); io.unobserve(en.target); } }), { threshold: .2 });
    main.querySelectorAll('.rs-trio, .rs-tl, .rs-album, .rs-cal, .rs-pair').forEach(el => io.observe(el));
  } else main.querySelectorAll('.rs-trio, .rs-tl, .rs-album, .rs-cal, .rs-pair').forEach(el => el.classList.add('seen'));

  // gift sheet
  const gdlg = main.querySelector('.gift-dlg');
  main.querySelector('.packet-btn')?.addEventListener('click', () => gdlg.showModal());
  gdlg?.addEventListener('click', e => { if (e.target === gdlg || e.target.closest('.gift-x')) gdlg.close(); });

  wireSignatures(c, main);
});

function wireSignatures(c, main) {
  const book = main.querySelector('.rs-book'); if (!book) return;
  const board = book.querySelector('.board'), sigs = board.querySelector('.sigs'), list = book.querySelector('.rs-wishes');
  const hint = board.querySelector('.board-hint'), place = book.querySelector('.place-bar');
  const dlg = main.querySelector('.sig-dlg'), pad = dlg.querySelector('.pad'), g = pad.getContext('2d');
  const samples = c.mods.guestbook?.content?.samples || [];
  let draft = null, ghost = null;

  const draw = () => {
    const all = EA.list('guestbook').filter(w => w.message);
    sigs.innerHTML = all.filter(w => w.sig).map(w => `<img src="${w.sig}" alt="Chữ ký của ${esc(w.name)}" style="left:${+w.x}%;top:${+w.y}%;width:${+(w.w || 26)}%">`).join('');
    hint.hidden = all.some(w => w.sig);
    list.innerHTML = [...all.slice().reverse(), ...samples].map(w => `<li><p>${esc(w.message)}</p><p class="by">— ${esc(w.name)}</p></li>`).join('')
      || '<li class="empty">Chưa có lời chúc nào. Hãy là người đầu tiên!</li>';
  };
  draw();

  // step 1: draw the signature
  let drawing = false, drew = false;
  const pos = e => { const r = pad.getBoundingClientRect(); return [(e.clientX - r.left) * pad.width / r.width, (e.clientY - r.top) * pad.height / r.height]; };
  const reset = () => { g.clearRect(0, 0, pad.width, pad.height); g.lineWidth = 5; g.lineCap = g.lineJoin = 'round'; g.strokeStyle = '#8f0f22'; drew = false; };
  pad.addEventListener('pointerdown', e => { drawing = true; pad.setPointerCapture(e.pointerId); g.beginPath(); g.moveTo(...pos(e)); });
  pad.addEventListener('pointermove', e => { if (!drawing) return; g.lineTo(...pos(e)); g.stroke(); drew = true; });
  pad.addEventListener('pointerup', () => { drawing = false; });
  const openPad = () => { reset(); dlg.querySelector('.s1').hidden = false; dlg.querySelector('.s3').hidden = true; dlg.showModal(); };
  book.querySelector('.sign-btn').addEventListener('click', openPad);

  // step 2: the signature sits on the photo; drag it anywhere, resize it, then confirm
  const apply = () => Object.assign(ghost.style, { left: draft.x + '%', top: draft.y + '%', width: draft.w + '%' });
  const startPlacing = () => {
    ghost = Object.assign(document.createElement('img'), { src: draft.sig, className: 'ghost', alt: 'Chữ ký của bạn, kéo để di chuyển' });
    Object.assign(draft, { x: 37, y: 45, w: 26 });
    board.appendChild(ghost); apply();
    board.classList.add('placing');
    hint.hidden = false; hint.textContent = 'Kéo chữ ký tới vị trí bạn thích';
    place.hidden = false; place.querySelector('input').value = draft.w;
    board.scrollIntoView({ behavior: c.reduced ? 'auto' : 'smooth', block: 'center' });
    let drag = null;
    ghost.addEventListener('pointerdown', e => {
      e.preventDefault(); ghost.setPointerCapture(e.pointerId);
      const r = board.getBoundingClientRect();
      drag = { dx: e.clientX - r.left - draft.x / 100 * r.width, dy: e.clientY - r.top - draft.y / 100 * r.height };
    });
    ghost.addEventListener('pointermove', e => {
      if (!drag) return;
      const r = board.getBoundingClientRect(), gh = ghost.getBoundingClientRect();
      draft.x = Math.min(100 - gh.width / r.width * 100, Math.max(0, (e.clientX - r.left - drag.dx) / r.width * 100));
      draft.y = Math.min(100 - gh.height / r.height * 100, Math.max(0, (e.clientY - r.top - drag.dy) / r.height * 100));
      apply();
    });
    ghost.addEventListener('pointerup', () => { drag = null; });
    // resizing keeps the signature inside the photo
    place.querySelector('input').oninput = e => {
      draft.w = +e.target.value; apply();
      const r = board.getBoundingClientRect(), gh = ghost.getBoundingClientRect();
      draft.x = Math.min(draft.x, 100 - gh.width / r.width * 100);
      draft.y = Math.min(draft.y, 100 - gh.height / r.height * 100);
      apply();
    };
  };
  const stopPlacing = () => {
    ghost?.remove(); ghost = null; board.classList.remove('placing'); place.hidden = true;
    hint.textContent = 'Hãy là người đầu tiên ký tên!'; draw();
  };

  place.addEventListener('click', e => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'redo') { stopPlacing(); openPad(); }
    if (act === 'here') {
      draft.x = Math.round(draft.x * 10) / 10; draft.y = Math.round(draft.y * 10) / 10;
      board.classList.remove('placing'); place.hidden = true; hint.hidden = true;
      // step 3: the wish
      dlg.querySelector('.s1').hidden = true; dlg.querySelector('.s3').hidden = false;
      const f = dlg.querySelector('.s3'); if (c.guest !== c.data.defaultGuest) f.elements['name'].value = c.guest;
      dlg.showModal();
    }
  });

  dlg.addEventListener('click', e => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'clear') reset();
    if (act === 'next') { if (!drew) return; draft = { sig: pad.toDataURL('image/png') }; dlg.close(); startPlacing(); }
    if (act === 'send') {
      const f = dlg.querySelector('.s3'), name = f.elements['name'].value.trim(), message = f.message.value.trim();
      const err = f.querySelector('.form-error');
      if (!name || !message) { err.textContent = 'Điền tên và lời chúc giúp chúng tôi nhé.'; err.hidden = false; return; }
      err.hidden = true;
      EA.store('guestbook', { name, message, sig: draft.sig, x: draft.x, y: draft.y, w: draft.w })
        .then(() => { draft = null; f.reset(); dlg.close(); stopPlacing(); });
    }
  });
  // closing the wish dialog without sending returns to positioning
  dlg.addEventListener('cancel', () => { if (ghost) { board.classList.add('placing'); place.hidden = false; hint.hidden = false; } });
}
