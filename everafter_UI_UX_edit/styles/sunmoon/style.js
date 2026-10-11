// Mặt trời & mặt trăng: two halves, day and night; sun and moon meet in an eclipse, then the sky parts.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="half day"></div><div class="half night"></div>
    <div class="sm-scene">
      <p class="sm-to">Gửi ${e(c.guest)}</p>
      <div class="bodies">
        <div class="body-wrap sunw"><span class="sun" aria-hidden="true"></span><p>${e(D.bride.short)}</p></div>
        <div class="body-wrap moonw"><span class="moon" aria-hidden="true"></span><p>${e(D.groom.short)}</p></div>
      </div>
      <p class="sm-line">Một người là ban ngày, một người là ban đêm.<br>Khác biệt, nhưng luôn đi cùng một bầu trời.</p>
      <p class="sm-date">${c.d} · ${c.m} · ${c.y}</p>
      <button class="open-btn" type="button">Hội ngộ</button>
    </div>`;
  el.querySelector('.open-btn').addEventListener('click', () => {
    el.classList.add('eclipse');
    c.after(1900, () => el.classList.add('part'));
    c.after(3200, open);
  }, { once: true });
});

const SUN = '<span class="ico sun-ico" aria-hidden="true"></span>';
const MOON = '<span class="ico moon-ico" aria-hidden="true"></span>';

EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="sm-hero">
  <div class="side day">${SUN}<p class="label">Mặt trời</p><h1 class="sm-name">${e(cp.brideName)}</h1></div>
  <div class="side night">${MOON}<p class="label">Mặt trăng</p><p class="sm-name">${e(cp.groomName)}</p></div>
  <div class="sm-center">
    <div class="sm-photo"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"></div>
  </div>
  <div class="sm-foot day">
    <p class="headline">${c.t(cp.headline)}</p>
    <p class="hero-date">${c.dow} · ${c.dateText}</p>
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
  </div>
</div>`;
});

EA.section('families', ({ data: D, esc: e, mod }) => `<div class="sm-split">
  <div class="side day">${SUN}${fam(e, D.brideFamily, 'Nhà gái')}</div>
  <div class="side night">${MOON}${fam(e, D.groomFamily, 'Nhà trai')}</div>
  <div class="sm-foot day">
    <p class="kicker">${e(mod.content.kicker || 'Trân trọng báo tin lễ thành hôn của')}</p>
    <h2 class="couple"><span>${e(D.bride.name)}</span><span class="amp">&amp;</span><span>${e(D.groom.name)}</span></h2>
    <p class="note">${e(D.announceNote)}</p>
  </div>
</div>`);
function fam(e, f, label) {
  return `<p class="label">${e(f.label || label)}</p><p class="fam-n">Ông ${e(f.father)}</p><p class="fam-n">Bà ${e(f.mother)}</p><p class="addr">${e(f.address)}</p>`;
}

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Ngày và đêm của chúng mình')}
  <ol class="daynight">
    ${(mod.content.chapters || []).map((ch, i) => `
      <li class="${i % 2 ? 'night' : 'day'}">
        ${ch.image ? `<img src="${e(ch.image)}" alt="" loading="lazy">` : ''}
        <div>${i % 2 ? MOON : SUN}<p class="label">${e(ch.date)}</p><h3>${e(ch.title)}</h3><p>${e(ch.text)}</p></div>
      </li>`).join('')}
  </ol>
</div>`);

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Từ bình minh đến đêm trăng')}
  <div class="sm-events">
    ${D.events.map((ev, i) => `
      <article class="sm-ev ${i % 2 ? 'night' : 'day'}">
        ${i % 2 ? MOON : SUN}
        <p class="label">${e(ev.label)}</p>
        <p class="ev-time">${e(ev.time)}</p>
        <h3>${e(ev.title)}</h3>
        <p>${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Sáng và tối')}
  <div class="sm-gallery">${D.photos.map((p, i) => `<div class="fr ${i % 2 ? 'night' : 'day'}">${ui.photo(p, i)}</div>`).join('')}</div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Bạn sẽ đến vào lúc hoàng hôn chứ?')}
  <div class="twilight"><div class="tw-inner">${ui.rsvpForm()}</div></div>
</div>`);


// ---- wow: a tiny sky arc — the sun sets and the moon rises as you scroll through the day ----
EA.afterRender((c, main) => {
  document.body.insertAdjacentHTML('beforeend', '<div class="arc" aria-hidden="true"><svg viewBox="0 0 100 54"><path d="M6 50 A44 44 0 0 1 94 50" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 3"/><line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="1.2"/></svg><i class="s"></i><i class="m"></i></div>');
  const arc = document.querySelector('.arc'), s = arc.querySelector('.s'), m = arc.querySelector('.m');
  const at = (el, t) => { const a = Math.PI * (1 - t); el.style.left = `${50 + Math.cos(a) * 44}%`; el.style.top = `${(50 - Math.sin(a) * 44) / 54 * 100}%`; };
  let raf = 0;
  const upd = () => {
    raf = 0;
    const max = document.documentElement.scrollHeight - innerHeight, p = max > 0 ? Math.min(1, scrollY / max) : 0;
    at(s, Math.min(1, p * 2)); at(m, Math.max(0, p * 2 - 1));
    s.style.opacity = p < .5 ? 1 : 0; m.style.opacity = p >= .5 ? 1 : 0;
    arc.style.setProperty('--sky', p < .5 ? '#fff4dc' : '#1e2a4a');
    arc.classList.toggle('dark', p >= .5);
  };
  addEventListener('scroll', () => { raf ||= requestAnimationFrame(upd); }, { passive: true }); upd();
});
