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
        const rsTopContent = match[1];
        const nameMatch = rsTopContent.match(/<p class=["']rs-names["']>([\s\S]*?)<\/p>/i);
        const names = nameMatch ? nameMatch[1] : 'Gia Bảo &amp; Ngọc Linh';
        const imgMatch = rsTopContent.match(/<span class=["']env-photo["']>\s*<img[^>]*src=["']([^"']+)["']/i);
        const heroPhoto = imgMatch ? imgMatch[1] : 'https://picsum.photos/seed/everafter-hero/1400/1800';
        const dateMatch = rsTopContent.match(/<p class=["']rs-date["']>([\s\S]*?)<\/p>/i);
        const dateHtml = dateMatch ? dateMatch[1] : '<span class="hy" aria-hidden="true">囍</span><b>20.10.2026</b><span class="hy" aria-hidden="true">囍</span>';

        const coverHtml = `
  <div id="cover" class="cover rs-cover">
    <div class="rs-cover-inner">
      ${rsTopContent}
    </div>
  </div>`;

        const heroHtml = `<div class="rs-hero">
  <svg class="floral" viewBox="0 0 160 110" aria-hidden="true"><g fill="none" stroke="#9b8657" stroke-width="1.3" stroke-linecap="round"><path d="M2 4 C40 10 70 26 96 52 C112 68 128 80 158 86"/><path d="M30 12 C36 26 34 40 24 52"/><path d="M62 30 C74 34 80 46 78 60"/><path d="M104 60 C104 72 98 82 88 90"/></g><g fill="#b7a578"><ellipse cx="22" cy="8" rx="9" ry="3.6" transform="rotate(18 22 8)"/><ellipse cx="46" cy="20" rx="9" ry="3.4" transform="rotate(34 46 20)"/><ellipse cx="34" cy="34" rx="8" ry="3.2" transform="rotate(-70 34 34)"/><ellipse cx="80" cy="44" rx="9" ry="3.4" transform="rotate(50 80 44)"/><ellipse cx="78" cy="58" rx="8" ry="3" transform="rotate(-80 78 58)"/><ellipse cx="118" cy="72" rx="9" ry="3.2" transform="rotate(26 118 72)"/><ellipse cx="100" cy="80" rx="7" ry="3" transform="rotate(-60 100 80)"/><ellipse cx="140" cy="82" rx="8" ry="3" transform="rotate(10 140 82)"/></g></svg>
  <svg class="floral r" viewBox="0 0 160 110" aria-hidden="true"><g fill="none" stroke="#9b8657" stroke-width="1.3" stroke-linecap="round"><path d="M2 4 C40 10 70 26 96 52 C112 68 128 80 158 86"/><path d="M30 12 C36 26 34 40 24 52"/><path d="M62 30 C74 34 80 46 78 60"/><path d="M104 60 C104 72 98 82 88 90"/></g><g fill="#b7a578"><ellipse cx="22" cy="8" rx="9" ry="3.6" transform="rotate(18 22 8)"/><ellipse cx="46" cy="20" rx="9" ry="3.4" transform="rotate(34 46 20)"/><ellipse cx="34" cy="34" rx="8" ry="3.2" transform="rotate(-70 34 34)"/><ellipse cx="80" cy="44" rx="9" ry="3.4" transform="rotate(50 80 44)"/><ellipse cx="78" cy="58" rx="8" ry="3" transform="rotate(-80 78 58)"/><ellipse cx="118" cy="72" rx="9" ry="3.2" transform="rotate(26 118 72)"/><ellipse cx="100" cy="80" rx="7" ry="3" transform="rotate(-60 100 80)"/><ellipse cx="140" cy="82" rx="8" ry="3" transform="rotate(10 140 82)"/></g></svg>
  <p class="rs-kicker">Lễ Thành Hôn</p>
  <h1 class="rs-hero-title">${names}</h1>
  <figure class="rs-hero-photo"><img src="${heroPhoto}" alt="Ảnh cưới" fetchpriority="high"></figure>
  <p class="rs-tagline">Hai con người, một hành trình, và một ngày chúng mình muốn có bạn ở bên.</p>
  <p class="rs-date">${dateHtml}</p>
</div></section>`;

        html = html.replace(/<main\s+id=["']inv["'][^>]*>/i, () => `${coverHtml}\n  <main id="inv" class="inv">`);
        html = html.replace(/<div class=["']rs-top\s*["']>[\s\S]*?<\/div>\s*<\/section>/i, heroHtml);
        if (!html.includes('class="locked"') && !html.includes('class="ready locked"')) {
          html = html.replace(/<html([^>]*)class=["']([^"']*)["']/i, (m, pre, cls) => `<html${pre}class="${cls} locked"`);
        }
        html = html.replace(/<nav id=["']dock["']/i, '<nav id="dock" hidden');
        html = html.replace(/<div class=["']sides["']/i, '<div class="sides" hidden');
      }
    }

    const guardStyle = `<style id="ea-guard-style">
  [hidden] { display: none !important; }
  #cover[hidden], .cover[hidden] { display: none !important; visibility: hidden !important; pointer-events: none !important; }
  html.locked, html.locked body, body.locked { overflow: hidden !important; height: 100% !important; touch-action: none !important; overscroll-behavior: none !important; }
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
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
    return res.status(200).send(html);
  } catch (err) {
    return res.status(500).send('Lỗi máy chủ khi tải thiệp: ' + err.message);
  }
}
