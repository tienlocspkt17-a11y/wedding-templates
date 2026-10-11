// Bạch nguyệt quang & nốt chu sa: a single drop of cinnabar falls onto the moon and blooms.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="ml-stage">
      <p class="ml-to">Gửi ${e(c.guest)}</p>
      <div class="ml-moon"><span class="ml-drop" aria-hidden="true"></span><span class="ml-bloom" aria-hidden="true"></span></div>
      <div class="ml-texts"><p class="ml-verse">Có người là ánh trăng sáng mãi trên cao.<br>Có người là nốt chu sa lặng lẽ trong tim.</p>
      <p class="ml-reveal">Và ánh trăng ấy, cuối cùng đã ở bên.<br><b>${e(D.bride.short)} · ${e(D.groom.short)}</b></p></div>
      <button class="open-btn" type="button">Chạm vào ánh trăng</button>
    </div>`;
  el.querySelector('.open-btn').addEventListener('click', () => {
    el.classList.add('drop');
    c.after(900, () => el.classList.add('bloom'));
    c.after(3300, open);
  }, { once: true });
});

// Days from the first story chapter ("MM · YYYY") to the wedding.
const daysSince = (chapters, wedding) => {
  const m = (chapters?.[0]?.date || '').match(/(\d{1,2})\D+(\d{4})/);
  if (!m) return 0;
  return Math.max(0, Math.round((new Date(`${wedding}T00:00:00+07:00`) - new Date(Date.UTC(+m[2], +m[1] - 1, 1))) / 864e5));
};

EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="ml-hero">
    <div class="moon-photo"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"><span class="cinnabar" aria-hidden="true"></span></div>
    <p class="eyebrow">Bạch nguyệt quang · Nốt chu sa</p>
    <h1 class="ml-names">${e(cp.brideName)}<span>&amp;</span>${e(cp.groomName)}</h1>
    <p class="headline">${c.t(cp.headline)}</p>
    <p class="hero-date">${c.dow} · ${c.dateText}</p>
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
  </div>
</div>`;
});

EA.section('story', c => {
  const { esc: e, ui, mod, config } = c;
  const days = daysSince(mod.content.chapters, config.couple.weddingDate);
  return `<div class="wrap narrow">
  ${ui.head('Love story', 'Những ngày theo đuổi')}
  ${days ? `<p class="ml-days"><span>${days.toLocaleString('vi-VN')}</span> ngày từ lần đầu gặp gỡ</p>` : ''}
  <ol class="ml-line">
    ${(mod.content.chapters || []).map((ch, i, all) => `
      <li class="${i === all.length - 1 ? 'last' : ''}">
        <time>${e(ch.date)}</time>
        <div><h3>${e(ch.title)}</h3><p>${e(ch.text)}</p></div>
      </li>`).join('')}
  </ol>
  ${mod.content.quote ? `<p class="story-quote">${e(mod.content.quote)}</p>` : ''}
</div>`;
});

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ngày ánh trăng về nhà')}
  <div class="ml-events">
    ${D.events.map((ev, i) => `
      <article class="ml-ev ${i % 2 ? 'red' : 'white'}">
        <span class="ev-mark" aria-hidden="true"></span>
        <p class="label">${e(ev.label)}</p>
        <h3>${e(ev.title)}</h3>
        <p class="ev-time">${e(ev.time)}</p>
        <p>${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('gallery', ({ data: D, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Những tuần trăng')}
  <div class="phases">${D.photos.map((p, i) => ui.photo(p, i, `<span class="phase p${i % 4}" aria-hidden="true"></span>`)).join('')}</div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Hồi âm dưới ánh trăng')}
  <div class="ml-rsvp"><span class="cinnabar" aria-hidden="true"></span>${ui.rsvpForm()}</div>
</div>`);


// ---- wow: a small moon in the corner waxes as you read; full moon — and the cinnabar dot — at the end ----
EA.afterRender((c, main) => {
  document.body.insertAdjacentHTML('beforeend', '<div class="waxing" aria-hidden="true"><span class="shade"></span><i class="dot"></i></div>');
  const w = document.querySelector('.waxing'), shade = w.querySelector('.shade');
  let raf = 0;
  const upd = () => {
    raf = 0;
    const max = document.documentElement.scrollHeight - innerHeight, p = max > 0 ? Math.min(1, scrollY / max) : 1;
    shade.style.transform = `translateX(${(p * 105).toFixed(1)}%)`;
    w.classList.toggle('full', p > .985);
  };
  addEventListener('scroll', () => { raf ||= requestAnimationFrame(upd); }, { passive: true }); upd();
});
