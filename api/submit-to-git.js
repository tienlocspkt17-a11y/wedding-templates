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
    const phone = orderData.phone || 'Chưa cung cấp';
    const templateId = orderData.templateId || 'wedding';
    const timestamp = new Date().toISOString();

    const fullOrderMeta = {
      cardId: safeCardId,
      templateId,
      templateName: orderData.templateName || templateId,
      couple: coupleName,
      phone,
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

    const commitMsg = `feat(order): Chốt thiệp ${coupleName} - Mẫu ${templateId} - SĐT ${phone}`;

    // 1. Commit HTML file
    const htmlCommit = await commitFile(
      `submissions/${safeCardId}/index.html`,
      html,
      commitMsg + ' (HTML)'
    );

    // 2. Commit Order Metadata JSON
    await commitFile(
      `submissions/${safeCardId}/order.json`,
      JSON.stringify(fullOrderMeta, null, 2),
      commitMsg + ' (Metadata)'
    );

    const githubFolder = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/tree/${GITHUB_BRANCH}/submissions/${safeCardId}`;
    const liveUrl = `https://${GITHUB_OWNER}.github.io/${GITHUB_REPO}/submissions/${safeCardId}/index.html`;

    return res.status(200).json({
      ok: true,
      cardId: safeCardId,
      commitSha: htmlCommit?.commit?.sha || null,
      githubFolder,
      liveUrl,
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
