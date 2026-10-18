// Vercel Serverless Function: Instantly renders finalized wedding cards from GitHub
// Zero build delay - eliminates GitHub Pages 1-minute 404 lag
export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).send('Missing card id parameter.');
  }

  const safeCardId = String(id).replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 60);
  const rawGithubUrl = `https://raw.githubusercontent.com/tienlocspkt17-a11y/wedding-templates/main/submissions/${safeCardId}/index.html`;

  try {
    const fetchRes = await fetch(rawGithubUrl, {
      headers: { 'User-Agent': 'Wedding-Templates-Viewer' },
      cache: 'no-store'
    });

    if (!fetchRes.ok) {
      return res.status(404).send(`
        <!doctype html>
        <html lang="vi">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Đang xử lý thiệp cưới</title>
          <style>
            body { font-family: system-ui, sans-serif; background: #181515; color: #f4eae6; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; }
            .card { max-width: 420px; padding: 32px; background: #241f1f; border-radius: 18px; border: 1px solid #382e2e; }
            h2 { color: #f5a9b8; margin-top: 0; }
            p { color: #c0b0ac; font-size: 14px; line-height: 1.6; }
            a { color: #f5a9b8; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>Thiệp cưới đang được khởi tạo</h2>
            <p>Mã thiệp <code>${safeCardId}</code> đang được hệ thống đồng bộ. Vui lòng tải lại trang sau vài giây.</p>
            <p><a href="javascript:location.reload()">🔄 Tải lại trang</a></p>
          </div>
        </body>
        </html>
      `);
    }

    let html = await fetchRes.text();

    // Self-healing sanitization for any card submissions
    html = html.replace(/<\\\/script>/g, '</script>');
    html = html.replace(/\beverafter-editor-mode\b/g, '');
    html = html.replace(/<div\s+id=["']cover["']\s+class=["']cover["']\s+hidden(?:=["'][^"']*["'])?\s*><\/div>/gi, '');
    html = html.replace(/<div\s+class=["']cover["']\s+id=["']cover["']\s+hidden(?:=["'][^"']*["'])?\s*><\/div>/gi, '');
    html = html.replace(/classList\.remove\((["'])locked\1,\s*(["'])\2\)/g, "classList.remove('locked')");

    // Self-healing: if redseal card has envelope inside hero without #cover, promote to true intro cover
    if (!html.includes('id="cover"') || html.includes('id="cover" hidden')) {
      const match = html.match(/<div class=["']rs-top\s*["']>([\s\S]*?)<\/div>\s*<\/section>/i);
      if (match) {
        const rsTopContent = match[1].replace(/\bopen-btn\b/g, '');
        const coverHtml = `
  <div id="cover" class="cover rs-cover">
    <div class="rs-top">
      ${rsTopContent}
    </div>
  </div>`;

        html = html.replace(/<main\s+id=["']inv["'][^>]*>/i, () => `${coverHtml}\n  <main id="inv" class="inv">`);
        html = html.replace(/<section[^>]*id=["']hero["'][^>]*>[\s\S]*?<\/section>/i, '');
        if (!html.includes('class="locked"') && !html.includes('class="ready locked"')) {
          html = html.replace(/<html([^>]*)class=["']([^"']*)["']/i, (m, pre, cls) => `<html${pre}class="${cls} locked"`);
        }
        html = html.replace(/<nav id=["']dock["']/i, '<nav id="dock" hidden');
        html = html.replace(/<div class=["']sides["']/i, '<div class="sides" hidden');
      }
    }

    // Normalize any legacy .rs-cover-inner to .rs-top and remove non-original #hero on redseal cards
    html = html.replace(/openButtons\.forEach\(function\(btn\)\s*\{\s*btn\.addEventListener/, 'openButtons.forEach(function(btn) {\n    btn.__bound = true;\n    btn.addEventListener');
    if (html.includes('data-style="redseal"') || html.includes('rs-cover')) {
      html = html.replace(/<div class=["']rs-cover-inner["']>/g, '<div class="rs-top">');
      html = html.replace(/<section[^>]*id=["']hero["'][^>]*>[\s\S]*?<\/section>/i, '');
      html = html.replace(/const topSec = document\.querySelector\('\.rs-top, \.envelope-wrapper, #envelope-scene'\);[\s\S]*?return;\s*\}/,
        `const topSec = (cover && cover.querySelector('.rs-top, .rs-cover-inner')) || document.querySelector('.rs-top, .rs-cover-inner, .envelope-wrapper, #envelope-scene');
      if (topSec && !topSec.classList.contains('is-open')) {
        topSec.classList.add('opening');
        setTimeout(function() { topSec.classList.add('is-open'); }, 650);
        setTimeout(function() {
          finishOpen();
        }, 2400);
        return;
      }`);
      html = html.replace(/const topSec = cover\?\.querySelector\('\.rs-cover-inner, \.rs-top'\)[\s\S]*?return;\s*\}/,
        `const topSec = (cover && cover.querySelector('.rs-top, .rs-cover-inner')) || document.querySelector('.rs-top, .rs-cover-inner, .envelope-wrapper, #envelope-scene');
      if (topSec && !topSec.classList.contains('is-open')) {
        topSec.classList.add('opening');
        setTimeout(function() { topSec.classList.add('is-open'); }, 650);
        setTimeout(function() {
          finishOpen();
        }, 2400);
        return;
      }`);
    }

    const guardStyle = `<style id="ea-guard-style-live">
  [hidden] { display: none !important; }
  #cover[hidden], .cover[hidden] { display: none !important; visibility: hidden !important; pointer-events: none !important; }
  html.locked, html.locked body, body.locked { overflow: hidden !important; height: 100% !important; touch-action: none !important; overscroll-behavior: none !important; }
  .cover.rs-cover { position: fixed; inset: 0; z-index: 100; display: block; padding: 0; background: var(--bg, #f7e6ec); overflow: hidden; transition: opacity .7s cubic-bezier(.2, .8, .2, 1), visibility .7s; }
  .cover.rs-cover.is-leaving { opacity: 0; visibility: hidden; pointer-events: none; }
  .cover.rs-cover .rs-top, .cover.rs-cover .rs-cover-inner { width: 100%; max-width: 480px; margin: 0 auto; min-height: 100svh; background: #fff; position: relative; display: grid; justify-items: center; align-content: start; text-align: center; padding: 58px 16px 36px; overflow: hidden; box-shadow: 0 0 50px rgba(163, 29, 52, .06); }
  .opening .env-flap, .is-open .env-flap { transform: perspective(700px) rotateX(180deg) !important; z-index: 0 !important; }
  .opening .tap, .is-open .tap { opacity: 0 !important; visibility: hidden !important; transition: opacity .3s; }
  .is-open .env-photo { height: 158% !important; }
  .heart svg { width: 24px !important; height: 24px !important; fill: var(--wine, #7b0f1e); stroke: none; display: inline-block; vertical-align: middle; }
  [data-style="redseal"] #hero, .rs-page #hero, #hero:empty, .m-hero:empty { display: none !important; padding: 0 !important; }
  [data-style="redseal"] .m-invitation, .rs-page .m-invitation { position: relative; padding-top: 58px !important; overflow: hidden; }
  @media (pointer: coarse), (max-width: 768px) {
    html { scroll-behavior: auto !important; -webkit-overflow-scrolling: touch !important; }
    .rs-wishes, .wish-list { max-height: none !important; overflow: visible !important; }
    .sec, .wrap, .inv { touch-action: pan-y !important; -webkit-overflow-scrolling: touch !important; }
  }
</style>`;

    if (html.includes('</head>')) {
      html = html.replace('</head>', guardStyle + '\n</head>');
    } else {
      html = guardStyle + '\n' + html;
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=10, s-maxage=30');
    return res.status(200).send(html);
  } catch (err) {
    return res.status(500).send('Lỗi máy chủ khi tải thiệp: ' + err.message);
  }
}
