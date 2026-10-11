import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(root, 'templates');
const required = ['intro','couple','families','invitation','story','events','calendar','party','video','gallery','dress','faq','rsvp','gifts','registry','guestbook','thanks'];
const modes = ['curtain10','herbarium10','elevator10','washi10','ink10','bottle10','super8','shadow10','astrolabe10','rain10'];
const introSpecs = {
  curtain10:{art:'morning',keyframe:'morning-prism-lock',marker:'morning-prism'}, herbarium10:{art:'herbarium',keyframe:'herbarium-contact',marker:'herbarium-contact'}, elevator10:{art:'camera',keyframe:'camera-dolly',marker:'camera-plane'}, washi10:{art:'washi',keyframe:'washi-fold-left',marker:'washi-fold'}, ink10:{art:'ink',keyframe:'ink-wax-left',marker:'ink-wax-half'},
  bottle10:{art:'shore',keyframe:'shore-pool-turn',marker:'shore-pool'}, super8:{art:'super8',keyframe:'super8-transport',marker:'super8-gate'}, shadow10:{art:'shadow',keyframe:'shadow-panel-left',marker:'shadow-panel'}, astrolabe10:{art:'astrolabe',keyframe:'astro-star-one',marker:'astro-orbit'}, rain10:{art:'rain',keyframe:'rain-train-pass',marker:'rain-train'}
};
const bodyMotionSpecs = {
  curtain10:'body-morning-wipe', herbarium10:'body-herbarium-settle', elevator10:'body-camera-lock',
  washi10:'body-washi-fold', ink10:'body-ink-bloom', bottle10:'body-shore-tide', super8:'body-film-advance',
  shadow10:'body-shadow-stage', astrolabe10:'body-astro-orbit', rain10:'body-rain-clear'
};
const files = fs.readdirSync(dir).filter(file => file.endsWith('.html')).sort();
const errors = [];
const introSignatures = new Set();
const heroFingerprints = [];
const introFingerprints = [];
if (files.length !== 10) errors.push(`Expected 10 HTML files, found ${files.length}.`);
const templates = new Set();

for (const file of files) {
  const html = fs.readFileSync(path.join(dir, file), 'utf8');
  const need = (needle) => { if (!html.includes(needle)) errors.push(`${file}: missing ${needle}`); };
  need('<!doctype html>'); need('id="wedding-config"'); need('data-action="open"'); need('data-music'); need('data-rsvp'); need('data-guestbook'); need('data-countdown'); need('data-countdown-value="days"'); need('data-countdown-value="hours"'); need('data-countdown-value="minutes"'); need('data-countdown-value="seconds"'); need('data-calendar'); need('data-calendar-grid'); need('data-wish-carousel'); need('data-wish-track'); need('data-wish-prev'); need('data-wish-next'); need('data-wish-toggle'); need('prefers-reduced-motion');
  need('interactionPause'); need('pointerenter'); need('aria-pressed'); need("setAttribute('inert','')"); need("removeAttribute('inert')");
  need('.wedding-opening.intro-cinematic'); need('.intro-cinematic .intro-gesture');
  need('window.setTimeout(revealPage,reduced?0:2640)'); need('window.setTimeout(finish,reduced?160:3000)');
  if (/opening-stage|opening-trigger|opening-reveal|opening-mechanism|opening-panel|opening-veil/.test(html)) errors.push(`${file}: legacy opening CSS or markup leaked into the output.`);
  if (html.includes('opening-seal')) errors.push(`${file}: still uses the shared centered seal control.`);
  need('.module[hidden]{display:none!important}'); need('.wedding-opening[hidden]{display:none!important}'); need('.scroll-reveal'); need('.hero-countdown'); need('.invitation-letter__seal');
  const css = html.match(/<style>([\s\S]*?)<\/style>/)?.[1] || '';
  if (!/\.invite \.couple > \*,[\s\S]*min-width:\s*0/.test(css)) errors.push(`${file}: grid children do not have a minimum-width overflow guard.`);
  if (!/overflow-wrap:\s*break-word/.test(css)) errors.push(`${file}: editable names lack a wrapping guard.`);
  if (!/\.invite-washi10 \.hero-countdown[\s\S]*writing-mode:\s*horizontal-tb/.test(css)) errors.push(`${file}: Washi countdown is not isolated from vertical writing mode.`);
  if (!/@media \(max-width:\s*760px\)[\s\S]*\.invite \.hero-ornament[\s\S]*bottom:/.test(css)) errors.push(`${file}: mobile ornament safety rule is missing.`);
  if (!/@media \(max-width:\s*760px\)[\s\S]*\.invite \.invitation[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)/.test(css)) errors.push(`${file}: mobile invitation grid reset is missing.`);
  if (!/@media \(max-width:\s*760px\)[\s\S]*\.invite \.couple,[\s\S]*\.invite \.story[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)/.test(css)) errors.push(`${file}: mobile couple/story grid reset is missing.`);
  if (!/@media \(max-width:\s*760px\)[\s\S]*\.invite \.events \.event-list[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)/.test(css)) errors.push(`${file}: mobile event-list grid reset is missing.`);
  if (!/@media \(max-width:\s*760px\)[\s\S]*\.invite \.wish-stage[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)/.test(css)) errors.push(`${file}: mobile guestbook grid reset is missing.`);
  if (!/@media \(max-width:\s*760px\)[\s\S]*\.invite \.gallery-grid[\s\S]*repeat\(2,\s*minmax\(0,\s*1fr\)\)/.test(css)) errors.push(`${file}: mobile gallery grid reset is missing.`);
  if (!/@media \(max-width:\s*900px\)[\s\S]*\.invite-washi10 \.hero-copy[\s\S]*writing-mode:\s*horizontal-tb\s*!important/.test(css)) errors.push(`${file}: narrow Washi writing-mode fail-safe is missing.`);
  if (!/@media \(max-width:\s*900px\)[\s\S]*\.invite \.events \.event-list[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*!important/.test(css)) errors.push(`${file}: narrow event-list fail-safe is missing.`);
  if (!/@media \(max-width:\s*900px\)[\s\S]*\.invite \.gallery-grid[\s\S]*repeat\(2,\s*minmax\(0,\s*1fr\)\)\s*!important/.test(css)) errors.push(`${file}: narrow gallery fail-safe is missing.`);
  if ((css.match(/{/g)||[]).length !== (css.match(/}/g)||[]).length) errors.push(`${file}: unbalanced CSS blocks.`);
  const centralControl = /\.intro-cinematic \.intro-control\s*\{[^}]*left:\s*50%;[^}]*top:\s*50%;[^}]*transform:\s*translate\(-50%,\s*-50%\)/s.test(css);
  const centralMobileControl = /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.intro-cinematic \.intro-control\s*\{[^}]*left:\s*50%\s*!important;[^}]*top:\s*50%\s*!important;[^}]*transform:\s*translate\(-50%,\s*-50%\)\s*!important/s.test(css);
  if (!centralControl || !centralMobileControl) errors.push(`${file}: intro primary action is not centered and mobile-safe.`);
  if (/\.intro-cinematic--[a-z0-9]+\s+\.intro-control\s*\{[^}]*\b(?:left|right|top|bottom)\s*:/s.test(css)) errors.push(`${file}: a template-specific intro control offsets the shared center anchor.`);
  if (!/\.intro-cinematic \.intro-gesture\s*\{[^}]*width:\s*68px;[^}]*height:\s*68px;/s.test(css)) errors.push(`${file}: desktop intro tap target is undersized.`);
  if (!/\.intro-cinematic \.intro-gesture\s*\{[^}]*width:\s*72px;[^}]*height:\s*72px;/s.test(css)) errors.push(`${file}: mobile intro tap target is undersized.`);
  if (!/scroll-padding-bottom:\s*calc\(94px \+ env\(safe-area-inset-bottom\)\)/.test(css) || !/\.invite\s*\{\s*padding-bottom:\s*calc\(88px \+ env\(safe-area-inset-bottom\)\)/s.test(css)) errors.push(`${file}: mobile journey navigation can obscure the final content.`);
  for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    try { new Function(match[1]); } catch { errors.push(`${file}: invalid inline JavaScript.`); }
  }
  if (/React|Vue|Next\.js|tailwind|EverAfter/i.test(html)) errors.push(`${file}: prohibited stack reference.`);
  const id = html.match(/data-template="([^"]+)"/)?.[1];
  if (!id) errors.push(`${file}: missing data-template.`); else if (templates.has(id)) errors.push(`${file}: duplicate template id ${id}.`); else templates.add(id);
  const scene = html.match(/data-mode="([a-z0-9-]+)"/)?.[1];
  if (!scene || !modes.includes(scene)) errors.push(`${file}: missing unique 3-second intro mode.`);
  else {
    const spec=introSpecs[scene];
    need(`intro-cinematic--${scene}`); need(`cinematic-art--${spec.art}`); need(`intro-gesture--${scene}`); need(`class="${spec.marker}`); need('class="intro-final"'); need('data-field="introAction"');
    need(`.invite-${scene} .couple`); need(`.invite-${scene} .hero-photo`); need(`.intro-cinematic--${scene}.is-opening`); need(`@keyframes ${spec.keyframe}`); need(`@keyframes ${bodyMotionSpecs[scene]}`); need(`.invite-${scene} .scroll-reveal.is-revealed`);
    need('class="intro-media" data-asset="hero"'); need('class="intro-control__copy"');
    const gateStart = html.indexOf(`<div class="gate wedding-opening intro-cinematic intro-cinematic--${scene}"`);
    const navStart = html.indexOf('<nav class="journey-nav"', gateStart);
    if (gateStart >= 0 && navStart > gateStart) {
      const gateMarkup = html.slice(gateStart, navStart);
      if (gateMarkup.includes('opening-panel') || gateMarkup.includes('opening-veil') || gateMarkup.includes('opening-trigger')) errors.push(`${file}: gate still contains a legacy floating-card control.`);
      introSignatures.add(gateMarkup);
    }
    if (scene === 'super8') {
      need('class="super8-film-window"'); need('class="super8-film-track"');
      if (!/\.super8-gate\s*\{[^}]*position:\s*absolute;[^}]*left:\s*50%;[^}]*top:\s*50%/s.test(css)) errors.push(`${file}: Super 8 gate is not a fixed centered frame.`);
      if (!/\.intro-cinematic--super8\.is-opening\s+\.super8-film-track\s*\{[^}]*animation:\s*super8-transport/s.test(css)) errors.push(`${file}: Super 8 strip does not transport through its fixed gate.`);
    }
    const fingerprint = new Set([...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].flatMap(m => m[1].split(',').map(selector => selector.trim()).filter(selector => selector.includes(`.invite-${scene}`)).map(selector => `${selector.replaceAll(`.invite-${scene}`,'.invite-THEME')}|${m[2].replace(/\s+/g,' ').trim()}`)));
    heroFingerprints.push({scene, fingerprint});
    const introFingerprint = new Set([...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].flatMap(m => m[1].split(',').map(selector => selector.trim()).filter(selector => ['.intro-cinematic--'+scene,'.cinematic-art--'+spec.art,'.intro-gesture--'+scene].some(prefix=>selector.includes(prefix))).map(selector => selector.replaceAll('--'+scene,'--MODE').replaceAll('--'+spec.art,'--ART')+'|'+m[2].replace(/\s+/g,' ').trim())));
    introFingerprints.push({scene,fingerprint:introFingerprint});
  }
  for (const module of required) {
    const count = [...html.matchAll(new RegExp(`data-module="${module}"`, 'g'))].length;
    if (count !== 1) errors.push(`${file}: module ${module} appears ${count} times.`);
  }
  const raw = html.match(/<script type="application\/json" id="wedding-config">([\s\S]*?)<\/script>/)?.[1];
  try {
    const config = JSON.parse(raw);
    if (config.order.length !== 17 || new Set(config.order).size !== 17) errors.push(`${file}: configuration order is incomplete.`);
    if (!required.every(key => key in config.modules)) errors.push(`${file}: configuration modules are incomplete.`);
    if (!config.content?.bride || !config.content?.events?.length || !config.content?.dateISO || !Array.isArray(config.content?.wishes) || !config.music) errors.push(`${file}: configuration content is incomplete.`);
    if (!config.content?.introKicker || !config.content?.introAction || !config.content?.introPrompt || !config.content?.introReveal) errors.push(`${file}: intro text is not configurable.`);
    if (!('hero' in (config.assets||{})) || !config.modules.intro) errors.push(`${file}: intro photo or module setting is not configurable.`);
  } catch { errors.push(`${file}: invalid configuration JSON.`); }
}

if (introSignatures.size !== 10) errors.push(`Intro markup diversity is ${introSignatures.size}/10.`);
let closest = {score:0,pair:''};
for (let i=0;i<heroFingerprints.length;i++) for(let j=i+1;j<heroFingerprints.length;j++) {
  const a=heroFingerprints[i], b=heroFingerprints[j], shared=[...a.fingerprint].filter(x=>b.fingerprint.has(x)).length, score=shared/Math.max(1,a.fingerprint.size+b.fingerprint.size-shared);
  if(score>closest.score) closest={score,pair:`${a.scene} / ${b.scene}`};
}
if (closest.score > .7) errors.push(`Closest post-intro CSS pair is too similar (${Math.round(closest.score*100)}%): ${closest.pair}.`);
let closestIntro = {score:0,pair:''};
for (let i=0;i<introFingerprints.length;i++) for(let j=i+1;j<introFingerprints.length;j++) {
  const a=introFingerprints[i], b=introFingerprints[j], shared=[...a.fingerprint].filter(x=>b.fingerprint.has(x)).length, score=shared/Math.max(1,a.fingerprint.size+b.fingerprint.size-shared);
  if(score>closestIntro.score) closestIntro={score,pair:a.scene+' / '+b.scene};
}
if (closestIntro.score > .7) errors.push(`Closest intro CSS pair is too similar (${Math.round(closestIntro.score*100)}%): ${closestIntro.pair}.`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`PASS — ${files.length} standalone invitations; ${introSignatures.size} distinct intro structures; all ${required.length} modules and intro text configurable; closest post-intro CSS pair ${closest.pair} (${Math.round(closest.score*100)}% similarity); closest intro pair ${closestIntro.pair} (${Math.round(closestIntro.score*100)}%).`);
