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
