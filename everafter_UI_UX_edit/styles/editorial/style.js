// Tạp chí: a magazine cover; the guest turns the cover page.
EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <div class="mag">
      <div class="page">
        <img class="bg" src="${e(D.photos[0]?.src)}" alt="">
        <header class="mast">
          <span class="issue">Số đặc biệt · Tháng ${+c.m} · ${c.y}</span>
          <p class="logo">The Wedding<br>Issue</p>
        </header>
        <div class="lines">
          <p><small>Gửi riêng</small>${e(c.guest)}</p>
          <p><small>${c.dow}</small>${c.d}.${c.m}.${c.y}</p>
        </div>
        <h1 class="names">${e(D.bride.short)}<em>&amp;</em>${e(D.groom.short)}</h1>
        <button class="open-btn" type="button">Lật trang →</button>
      </div>
    </div>`;
  el.querySelector('button').addEventListener('click', () => {
    el.classList.add('turning');
    c.after(900, open);
  }, { once: true });
});

// ---- layouts: a magazine feature spread ----
EA.section('events', ({ data: D, esc: e, ui, dow, d, m }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ngày chúng mình thành đôi')}
  <div class="feature">
    ${D.events.map((ev, i) => `
      <article class="story">
        <p class="bignum">${e(ev.time)}</p>
        <div>
          <p class="label">Chương ${i + 1} · ${e(ev.label)}</p>
          <h3>${e(ev.title)}</h3>
          <p class="dek">${dow}, ${d} tháng ${+m}. Tại <strong>${e(ev.place)}</strong> — ${e(ev.address)}.</p>
          ${ui.actions(ev)}
        </div>
      </article>`).join('')}
  </div>
</div>`);

EA.section('gallery', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('A glimpse of us', 'Khoảnh khắc của chúng mình')}
  <div class="spread">
    ${D.photos.map((p, i) => `<figure>${ui.photo(p, i)}<figcaption>Hình ${String(i + 1).padStart(2, '0')} — ${e(p.caption)}</figcaption></figure>`).join('')}
  </div>
</div>`);

EA.section('itinerary', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Wedding itinerary', 'Một ngày thật vui')}
  <ol class="index">
    ${D.itinerary.map(it => `<li><time>${e(it.time)}</time><strong>${e(it.title)}</strong><span>${e(it.note)}</span></li>`).join('')}
  </ol>
</div>`);

// ---- more layouts: editor's letter, interview Q&A, contributors, pull quote ----
EA.section('letter', ({ data: D, esc: e, guest, dateText }) => `<div class="wrap">
  <div class="ed-letter">
    <header><p class="kicker">Thư ngỏ · ${dateText}</p><h1 class="display">Một lời mời từ chúng mình</h1></header>
    <div class="cols">
      <p class="drop">Gửi ${e(guest)}, ${e(D.letter[0])}</p>
      ${D.letter.slice(1).map(p => `<p>${e(p)}</p>`).join('')}
      <p class="highlight">${e(D.letterHighlight)}</p>
    </div>
    <p class="byline">— ${e(D.bride.name)} <span class="amp">&amp;</span> ${e(D.groom.name)}</p>
  </div>
</div>`);

EA.section('faq', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Wedding guide', 'Hỏi nhanh, đáp gọn')}
  <div class="interview">
    ${D.faq.map(f => `<p class="q"><b>Hỏi</b>${e(f.q)}</p><p class="a"><b>Đáp</b>${e(f.a)}</p>`).join('')}
  </div>
</div>`);

EA.section('quote', ({ data: D, esc: e }) => `<div class="wrap">
  <blockquote class="pull">${e(D.quote)}</blockquote>
  <p class="eyebrow">— ${e(D.bride.short)} &amp; ${e(D.groom.short)}</p>
</div>`);

EA.section('contact', ({ data: D, esc: e, ui }) => `<div class="wrap narrow">
  ${ui.head('Contact', 'Ban biên tập')}
  <dl class="masthead">
    ${[['Cô dâu', D.bride], ['Chú rể', D.groom]].map(([r, p]) => `<div><dt>${r}</dt><dd>${e(p.name)}</dd><dd><a href="tel:${e(p.phone.replace(/\s/g, ''))}">${e(p.phone)}</a></dd></div>`).join('')}
  </dl>
</div>`);

// ---- v3: cover-story hero, numbered chapters, reply coupon ----
EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="wrap">
  <div class="ed-hero">
    <div class="ed-hero-txt">
      <p class="kicker">Số đặc biệt · ${c.dateText}</p>
      <h1 class="ed-names">${e(cp.brideShortName)}<br><em>&amp;</em> ${e(cp.groomShortName)}</h1>
      <p class="headline">${c.t(cp.headline)}</p>
      <p class="hero-date">${c.dow} · ${e(cp.city)}</p>
      ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    </div>
    <figure class="ed-hero-img"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" fetchpriority="high"><figcaption>Ảnh bìa — ${e(cp.brideName)} &amp; ${e(cp.groomName)}</figcaption></figure>
  </div>
</div>`;
});

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Chuyện của chúng mình')}
  <div class="ed-story">
    ${(mod.content.chapters || []).map((ch, i) => `
      <article class="ed-ch">
        <p class="ed-ch-no">${String(i + 1).padStart(2, '0')}</p>
        <div>
          <p class="label">Chương ${i + 1} · ${e(ch.date)}</p>
          <h3>${e(ch.title)}</h3>
          <p class="dek">${e(ch.text)}</p>
        </div>
        ${ch.image ? `<figure><img src="${e(ch.image)}" alt="" loading="lazy"><figcaption>Hình ${String(i + 1).padStart(2, '0')}</figcaption></figure>` : ''}
      </article>`).join('')}
  </div>
  ${mod.content.quote ? `<blockquote class="pull">${e(mod.content.quote)}</blockquote>` : ''}
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Phiếu trả lời')}
  <div class="coupon"><span class="scissors" aria-hidden="true">✂</span>${ui.rsvpForm()}</div>
</div>`);


// ---- wow: breaking-news ticker + scroll-weighted cover type ----
EA.afterRender((c, main) => {
  const cp = c.config.couple, e = c.esc;
  const items = [`${cp.brideName} & ${cp.groomName} chính thức nói lời "đồng ý"`, `Hôn lễ diễn ra ngày ${c.d}.${c.m}.${c.y} tại ${cp.city}`,
    'Độc quyền: bộ ảnh cưới lần đầu công bố', `Thư mời gửi riêng tới ${c.guest}`, 'Số đặc biệt · The Wedding Issue'];
  const bar = document.createElement('div');
  bar.className = 'ticker'; bar.setAttribute('aria-hidden', 'true');
  bar.innerHTML = `<span class="tk-label">Tin nóng</span><div class="tk-track"><p>${[...items, ...items].map(t => `<span>${e(t)}</span>`).join('<i>✦</i>')}</p></div>`;
  main.before(bar);  // outside <main> so section colour alternation is unchanged
  const names = main.querySelector('.ed-names');
  if (!names || c.reduced) return;
  let raf = 0;
  const upd = () => { raf = 0; const p = Math.min(1, scrollY / (innerHeight * .9)); names.style.fontVariationSettings = `'opsz' 144, 'wght' ${Math.round(300 + p * 400)}`; };
  addEventListener('scroll', () => { raf ||= requestAnimationFrame(upd); }, { passive: true }); upd();
});
