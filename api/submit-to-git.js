// Vercel Serverless Function: Commits finalized wedding card submissions to GitHub
// Target Repo: tienlocspkt17-a11y/wedding-templates
// Folder: submissions/<cardId>/index.html and order.json

const GITHUB_OWNER = 'tienlocspkt17-a11y';
const GITHUB_REPO = 'wedding-templates';
const GITHUB_BRANCH = 'main';

// Secure GitHub token from environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { cardId, html, order } = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});

    if (!cardId || !html) {
      return res.status(400).json({ error: 'Missing cardId or html payload.' });
    }

    const safeCardId = String(cardId).replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 60);
    const orderData = order || {};
    const coupleName = orderData.couple || 'Cặp đôi';
    const templateId = orderData.templateId || 'wedding';
    const timestamp = new Date().toISOString();

    const fullOrderMeta = {
      cardId: safeCardId,
      templateId,
      templateName: orderData.templateName || templateId,
      couple: coupleName,
      note: orderData.note || '',
      submittedAt: timestamp,
      clientIp: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown'
    };

    // Helper: Commit file to GitHub via Contents API
    async function commitFile(filePath, fileContent, commitMessage) {
      const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`;
      const base64Content = Buffer.from(fileContent, 'utf-8').toString('base64');

      // Check if file already exists to get its SHA for update
      let existingSha = null;
      try {
        const checkRes = await fetch(url, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'EverAfter-Serverless'
          }
        });
        if (checkRes.ok) {
          const checkData = await checkRes.json();
          existingSha = checkData.sha;
        }
      } catch (e) {
        // file doesn't exist yet, proceed
      }

      const body = {
        message: commitMessage,
        content: base64Content,
        branch: GITHUB_BRANCH
      };
      if (existingSha) {
        body.sha = existingSha;
      }

      const putRes = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'EverAfter-Serverless'
        },
        body: JSON.stringify(body)
      });

      if (!putRes.ok) {
        const errText = await putRes.text();
        throw new Error(`GitHub API error (${putRes.status}): ${errText}`);
      }

      return await putRes.json();
    }

    const commitMsg = `feat(order): Chốt thiệp ${coupleName} - Mẫu ${templateId}`;

    // Sanitize HTML before saving to GitHub
    let cleanHtml = html
      .replace(/<\\\/script>/g, '</script>')
      .replace(/\beverafter-editor-mode\b/g, '')
      .replace(/<div\s+id=["']cover["']\s+class=["']cover["']\s+hidden(?:=["'][^"']*["'])?\s*><\/div>/gi, '')
      .replace(/<div\s+class=["']cover["']\s+id=["']cover["']\s+hidden(?:=["'][^"']*["'])?\s*><\/div>/gi, '');

    const guardStyle = `<style id="ea-guard-style">\n  [hidden] { display: none !important; }\n  #cover[hidden], .cover[hidden] { display: none !important; visibility: hidden !important; pointer-events: none !important; }\n  html.locked, html.locked body, body.locked { overflow: hidden !important; height: 100% !important; touch-action: none !important; overscroll-behavior: none !important; }\n  @media (pointer: coarse), (max-width: 768px) {\n    html { scroll-behavior: auto !important; -webkit-overflow-scrolling: touch !important; }\n    .rs-wishes, .wish-list { max-height: none !important; overflow: visible !important; }\n    .sec, .wrap, .inv { touch-action: pan-y !important; -webkit-overflow-scrolling: touch !important; }\n  }\n</style>`;
    if (!cleanHtml.includes('ea-guard-style')) {
      if (cleanHtml.includes('</head>')) {
        cleanHtml = cleanHtml.replace('</head>', guardStyle + '\n</head>');
      } else {
        cleanHtml = guardStyle + '\n' + cleanHtml;
      }
    }

    // 1. Commit HTML file
    const htmlCommit = await commitFile(
      `submissions/${safeCardId}/index.html`,
      cleanHtml,
      commitMsg + ' (HTML)'
    );

    // 2. Commit Order Metadata JSON
    await commitFile(
      `submissions/${safeCardId}/order.json`,
      JSON.stringify(fullOrderMeta, null, 2),
      commitMsg + ' (Metadata)'
    );

    const githubFolder = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/tree/${GITHUB_BRANCH}/submissions/${safeCardId}`;
    const instantUrl = `https://wedding-templates-lyart.vercel.app/s/${safeCardId}`;
    const pagesUrl = `https://${GITHUB_OWNER}.github.io/${GITHUB_REPO}/submissions/${safeCardId}/index.html`;

    return res.status(200).json({
      ok: true,
      cardId: safeCardId,
      commitSha: htmlCommit?.commit?.sha || null,
      githubFolder,
      liveUrl: instantUrl,
      pagesUrl,
      message: 'Thiệp cưới đã được lưu vào GitHub repo submissions/ thành công!'
    });
  } catch (error) {
    console.error('Error submitting to git:', error);
    return res.status(500).json({
      ok: false,
      error: error.message || 'Internal server error'
    });
  }
}
