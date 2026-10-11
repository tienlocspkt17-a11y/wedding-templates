// Nhẫn cưới 3D: two metal rings drift in space; on open they interlock and the camera flies through them.
// three.js is loaded on demand; without WebGL the page falls back to CSS rings.
const THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
let threeP;
const loadThree = () => threeP ||= new Promise((ok, fail) => {
  if (window.THREE) return ok(window.THREE);
  const s = Object.assign(document.createElement('script'), { src: THREE_URL, onload: () => ok(window.THREE), onerror: fail });
  document.head.appendChild(s);
});
const webglOK = () => { try { return !!document.createElement('canvas').getContext('webgl'); } catch { return false; } };
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

// Build a ring scene on `canvas`. Returns { interlock(ms), flyThrough(ms), dispose() }.
function makeRings(THREE, canvas, { linked = false, reduced = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
  camera.position.set(0, 0, 7);

  // A soft studio environment painted on a canvas, so metal has something to reflect.
  const env = document.createElement('canvas'); env.width = 512; env.height = 256;
  const g = env.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, '#fff6e6'); grd.addColorStop(.45, '#8a7258'); grd.addColorStop(.55, '#2a211a'); grd.addColorStop(1, '#0d0a08');
  g.fillStyle = grd; g.fillRect(0, 0, 512, 256);
  [[90, 60, 70], [300, 40, 50], [440, 90, 40]].forEach(([x, y, r]) => { const rg = g.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, 'rgba(255,255,255,1)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2); });
  const envTex = new THREE.CanvasTexture(env); envTex.mapping = THREE.EquirectangularReflectionMapping; envTex.encoding = THREE.sRGBEncoding;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromEquirectangular(envTex).texture;

  const geo = new THREE.TorusGeometry(1, .13, 64, 200);
  const gold = new THREE.MeshStandardMaterial({ color: 0xe0b56e, metalness: 1, roughness: .18 });
  const rose = new THREE.MeshStandardMaterial({ color: 0xf1c3ae, metalness: 1, roughness: .22 });
  const a = new THREE.Mesh(geo, gold), b = new THREE.Mesh(geo, rose);
  const group = new THREE.Group(); group.add(a, b); scene.add(group);
  scene.add(new THREE.AmbientLight(0xffffff, .25));
  const key = new THREE.DirectionalLight(0xfff1dc, 1.2); key.position.set(3, 4, 5); scene.add(key);

  // floating gold dust
  const dust = new THREE.BufferGeometry(), N = 260, pos = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - .5) * (i % 3 === 2 ? 6 : 12);
  dust.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dustPts = new THREE.Points(dust, new THREE.PointsMaterial({ color: 0xd9b26f, size: .035, transparent: true, opacity: .8 }));
  scene.add(dustPts);

  // apart: floating separately; linked: A in the XY plane, B in the XZ plane, each through the other's centre
  const APART_WIDE = { ax: -1.9, ay: .5, arx: .4, ary: .8, bx: 1.9, by: -.4, brx: 1.9, bry: -.6 };
  // portrait screens: stack the rings diagonally so neither is cut off
  const APART_TALL = { ax: -.7, ay: 1.1, arx: .4, ary: .8, bx: .7, by: -.6, brx: 1.9, bry: -.6 };
  const LINK = { ax: -.52, ay: 0, arx: 0, ary: 0, bx: .52, by: 0, brx: Math.PI / 2, bry: 0 };
  let mix = linked ? 1 : 0, spin = 0, vel = 0, dragX = 0, dragY = 0, fly = 0, alive = true, visible = true, raf = 0;
  const tweens = [];
  const tween = (ms, fn) => new Promise(done => tweens.push({ t0: performance.now(), ms: reduced ? 1 : ms, fn, done }));

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    camera.position.z = (w / h < .8 ? 9 : 7) - fly * 8;
  };
  const ro = new ResizeObserver(resize); ro.observe(canvas);

  // drag / touch to rotate
  let px = null, py = null;
  canvas.addEventListener('pointerdown', e => { px = e.clientX; py = e.clientY; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', e => { if (px === null) return; dragY += (e.clientX - px) * .01; dragX += (e.clientY - py) * .01; px = e.clientX; py = e.clientY; });
  canvas.addEventListener('pointerup', () => { px = null; });
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && alive) loop(); });
  io.observe(canvas);

  const loop = now => {
    cancelAnimationFrame(raf);
    if (!alive || !visible) return;
    now ||= performance.now();
    for (let i = tweens.length - 1; i >= 0; i--) {
      const tw = tweens[i], p = Math.min(1, (now - tw.t0) / tw.ms);
      tw.fn(ease(p));
      if (p >= 1) { tweens.splice(i, 1); tw.done(); }
    }
    if (!reduced) { spin += .004 + vel; vel *= .94; }
    const tall = camera.aspect < .8, APART = tall ? APART_TALL : APART_WIDE;
    const S = k => lerp(APART[k], LINK[k], mix);
    group.position.y = tall && !linked ? .45 * (1 - fly) : 0;
    a.position.set(S('ax'), S('ay') + (reduced ? 0 : Math.sin(now / 900) * .06 * (1 - mix)), 0);
    b.position.set(S('bx'), S('by'), 0);
    a.rotation.set(S('arx'), S('ary'), 0); b.rotation.set(S('brx'), S('bry'), 0);
    group.rotation.set(.35 + dragX, spin + dragY, 0);
    dustPts.rotation.y = spin * .3;
    camera.position.z = (camera.aspect < .8 ? 9 : 7) - fly * 8;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  };
  resize(); loop();

  return {
    interlock: ms => tween(ms, p => { mix = p; }),
    kick: v => { vel = Math.max(-.25, Math.min(.25, vel + v)); },
    flyThrough: ms => tween(ms, p => { fly = p; }),
    dispose() { alive = false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); geo.dispose(); gold.dispose(); rose.dispose(); dust.dispose(); pmrem.dispose(); envTex.dispose(); renderer.dispose(); }
  };
}

const cssRings = linked => `<div class="css-rings ${linked ? 'linked' : ''}" aria-hidden="true"><span></span><span></span></div>`;

EA.cover((el, c, open) => {
  const { data: D, esc: e } = c;
  el.innerHTML = `
    <canvas class="ring-canvas" aria-hidden="true"></canvas>
    <div class="r3-overlay">
      <p class="r3-to">Gửi ${e(c.guest)}</p>
      <h1 class="r3-names">${e(D.bride.short)} <span>&amp;</span> ${e(D.groom.short)}</h1>
      <p class="r3-date">${c.d} · ${c.m} · ${c.y}</p>
      <button class="open-btn" type="button">Trao nhẫn</button>
    </div>
    <div class="r3-fade" aria-hidden="true"></div>`;
  const canvas = el.querySelector('canvas');
  let rings = null;
  const ready = webglOK()
    ? loadThree().then(T => { rings = makeRings(T, canvas, { reduced: c.reduced }); }).catch(() => fallback())
    : Promise.resolve(fallback());
  function fallback() { canvas.remove(); el.insertAdjacentHTML('afterbegin', cssRings(false)); }

  el.querySelector('.open-btn').addEventListener('click', async () => {
    el.classList.add('giving');
    await ready;
    if (rings) {
      await rings.interlock(1600);
      el.classList.add('flying');
      await rings.flyThrough(1100);
      open();
      setTimeout(() => rings.dispose(), 900);
    } else {
      el.querySelector('.css-rings')?.classList.add('linked');
      c.after(1800, open);
    }
  }, { once: true });
});

EA.section('hero', c => {
  const { config: { couple: cp }, esc: e, ui } = c;
  return `<div class="r3-hero">
  <div class="r3-stage"><canvas class="ring-canvas hero-rings" aria-label="Hai chiếc nhẫn cưới 3D, kéo để xoay" role="img"></canvas><p class="drag-hint">Kéo để xoay</p></div>
  <div class="r3-copy">
    <p class="eyebrow">Two rings · One promise</p>
    <h1 class="couple"><span>${e(cp.brideName)}</span><span class="amp">&amp;</span><span>${e(cp.groomName)}</span></h1>
    <p class="headline">${c.t(cp.headline)}</p>
    <p class="hero-date">${c.dow} · ${c.dateText}</p>
    ${c.mod.content.showCountdown !== false ? ui.countdown() : ''}
    <figure class="r3-photo"><img src="${e(cp.heroImage)}" alt="${e(cp.brideName)} và ${e(cp.groomName)}" loading="lazy"></figure>
  </div>
</div>`;
});

// Start the hero's live rings once the intro has closed, so only one 3D scene runs at a time.
(function startHeroRings(tries = 0) {
  const cv = document.querySelector('.hero-rings');
  const coverOpen = !document.getElementById('cover')?.hidden;
  if (!cv || coverOpen) { if (tries < 600) setTimeout(() => startHeroRings(tries + 1), 250); return; }
  const toCss = () => cv.replaceWith(Object.assign(document.createElement('div'), { innerHTML: cssRings(true) }).firstElementChild);
  if (!webglOK()) return toCss();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  loadThree().then(T => {
    const rings = makeRings(T, cv, { linked: true, reduced });
    if (reduced) return;
    // wow: the rings spin with your scroll speed, and a tap gives them a twirl
    let lastY = scrollY;
    addEventListener('scroll', () => { rings.kick((scrollY - lastY) * .0009); lastY = scrollY; }, { passive: true });
    cv.addEventListener('click', () => rings.kick(.18));
  }).catch(toCss);
})();

EA.section('story', ({ esc: e, ui, mod }) => `<div class="wrap">
  ${ui.head('Love story', 'Những vòng tròn của chúng mình')}
  <ol class="orbits">
    ${(mod.content.chapters || []).map((ch, i) => `
      <li><span class="o-ring" aria-hidden="true">${i + 1}</span><p class="label">${e(ch.date)}</p><h3>${e(ch.title)}</h3><p>${e(ch.text)}</p></li>`).join('')}
  </ol>
  ${mod.content.quote ? `<p class="story-quote">${e(mod.content.quote)}</p>` : ''}
</div>`);

EA.section('events', ({ data: D, esc: e, ui }) => `<div class="wrap">
  ${ui.head('Save the date', 'Ngày trao nhẫn')}
  <div class="r3-events">
    ${D.events.map(ev => `
      <article class="r3-ev">
        <span class="mini-ring" aria-hidden="true"></span>
        <p class="label">${e(ev.label)}</p>
        <h3>${e(ev.title)}</h3>
        <p class="ev-time">${e(ev.time)}</p>
        <p>${e(ev.place)}<br><span class="addr">${e(ev.address)}</span></p>
        ${ui.actions(ev)}
      </article>`).join('')}
  </div>
</div>`);

EA.section('rsvp', ({ ui }) => `<div class="wrap narrow">
  ${ui.head('RSVP', 'Bạn sẽ chứng kiến khoảnh khắc trao nhẫn chứ?')}
  <div class="r3-rsvp">${ui.rsvpForm()}</div>
</div>`);
