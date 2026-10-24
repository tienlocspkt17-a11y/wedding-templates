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
      .replace(/<div\s+class=["']cover["']\s+id=["']cover["']\s+hidden(?:=["'][^"']*["'])?\s*><\/div>/gi, '')
      .replace(/classList\.remove\((["'])locked\1,\s*(["'])\2\)/g, "classList.remove('locked')");

    // Self-healing: if redseal card has envelope inside hero without #cover, promote to true intro cover
    if (!cleanHtml.includes('id="cover"') || cleanHtml.includes('id="cover" hidden')) {
      const match = cleanHtml.match(/<div[^>]*class=["'][^"']*rs-top[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/section>/i);
      if (match) {
        let rsTopContent = match[1].replace(/\bopen-btn\b/g, '');
        rsTopContent = rsTopContent.replace(/style=["'][^"']*translate:[^"']*["']/gi, '');
        const coverHtml = `
  <div id="cover" class="cover rs-cover">
    <div class="rs-top">
      ${rsTopContent}
    </div>
  </div>`;

        cleanHtml = cleanHtml.replace(/<main\s+id=["']inv["'][^>]*>/i, () => `${coverHtml}\n  <main id="inv" class="inv">`);
        cleanHtml = cleanHtml.replace(/<section[^>]*id=["']hero["'][^>]*>[\s\S]*?<\/section>/i, '');
        if (!cleanHtml.includes('class="locked"') && !cleanHtml.includes('class="ready locked"')) {
          cleanHtml = cleanHtml.replace(/<html([^>]*)class=["']([^"']*)["']/i, (m, pre, cls) => `<html${pre}class="${cls} locked"`);
        }
        cleanHtml = cleanHtml.replace(/<nav id=["']dock["']/i, '<nav id="dock" hidden');
        cleanHtml = cleanHtml.replace(/<div class=["']sides["']/i, '<div class="sides" hidden');
      }
    }

    // Strip accidental translate styles from sections and containers that break document flow
    cleanHtml = cleanHtml.replace(/<([a-zA-Z0-9]+)([^>]*?)style=["']([^"']*translate:[^"']*)["']([^>]*?)>/gi, (m, tag, pre, style, post) => {
      const tagLower = tag.toLowerCase();
      if (tagLower === 'section' || tagLower === 'main' || tagLower === 'body' || pre.includes('class="sec') || post.includes('class="sec') || /translate:\s*[^;]*-([3-9]\d|[1-9]\d{2,})px/i.test(style)) {
        const newStyle = style.replace(/translate:\s*[^;]+;?/gi, '').trim();
        return newStyle ? `<${tag}${pre}style="${newStyle}"${post}>` : `<${tag}${pre}${post}>`;
      }
      return m;
    });

    // Sync couple names from .rs-names into #families .rs-pair
    const namesMatch = cleanHtml.match(/<p[^>]*class=["'][^"']*rs-names[^"']*["'][^>]*>([\s\S]*?)<\/p>/i);
    if (namesMatch) {
      const parts = namesMatch[1].split(/<span[^>]*class=["'][^"']*heart[^"']*["'][^>]*>[\s\S]*?<\/span>/i);
      if (parts.length === 2) {
        const gName = parts[0].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
        const bName = parts[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
        if (gName) cleanHtml = cleanHtml.replace(/<p class=["']n1["']>[\s\S]*?<\/p>/i, `<p class="n1">${gName}</p>`);
        if (bName) cleanHtml = cleanHtml.replace(/<p class=["']n2["']>[\s\S]*?<\/p>/i, `<p class="n2">${bName}</p>`);
      }
    }

    // Ensure floral SVGs inside #invitation .wrap narrow for redseal
    if (cleanHtml.includes('data-style="redseal"') || cleanHtml.includes('rs-cover') || cleanHtml.includes('rs-top')) {
      const invMatch = cleanHtml.match(/(<section[^>]*id=["']invitation["'][^>]*><div class=["']wrap narrow["']>)/i);
      if (invMatch) {
        const afterInv = cleanHtml.slice(invMatch.index, invMatch.index + 350);
        if (!afterInv.includes('class="floral"')) {
          const FLORAL_SVG = `<svg class="floral" viewBox="0 0 160 110" aria-hidden="true"><g fill="none" stroke="#9b8657" stroke-width="1.3" stroke-linecap="round"><path d="M2 4 C40 10 70 26 96 52 C112 68 128 80 158 86"/><path d="M30 12 C36 26 34 40 24 52"/><path d="M62 30 C74 34 80 46 78 60"/><path d="M104 60 C104 72 98 82 88 90"/></g><g fill="#b7a578"><ellipse cx="22" cy="8" rx="9" ry="3.6" transform="rotate(18 22 8)"/><ellipse cx="46" cy="20" rx="9" ry="3.4" transform="rotate(34 46 20)"/><ellipse cx="34" cy="34" rx="8" ry="3.2" transform="rotate(-70 34 34)"/><ellipse cx="80" cy="44" rx="9" ry="3.4" transform="rotate(50 80 44)"/><ellipse cx="78" cy="58" rx="8" ry="3" transform="rotate(-80 78 58)"/><ellipse cx="118" cy="72" rx="9" ry="3.2" transform="rotate(26 118 72)"/><ellipse cx="100" cy="80" rx="7" ry="3" transform="rotate(-60 100 80)"/><ellipse cx="140" cy="82" rx="8" ry="3" transform="rotate(10 140 82)"/></g></svg><svg class="floral r" viewBox="0 0 160 110" aria-hidden="true"><g fill="none" stroke="#9b8657" stroke-width="1.3" stroke-linecap="round"><path d="M2 4 C40 10 70 26 96 52 C112 68 128 80 158 86"/><path d="M30 12 C36 26 34 40 24 52"/><path d="M62 30 C74 34 80 46 78 60"/><path d="M104 60 C104 72 98 82 88 90"/></g><g fill="#b7a578"><ellipse cx="22" cy="8" rx="9" ry="3.6" transform="rotate(18 22 8)"/><ellipse cx="46" cy="20" rx="9" ry="3.4" transform="rotate(34 46 20)"/><ellipse cx="34" cy="34" rx="8" ry="3.2" transform="rotate(-70 34 34)"/><ellipse cx="80" cy="44" rx="9" ry="3.4" transform="rotate(50 80 44)"/><ellipse cx="78" cy="58" rx="8" ry="3" transform="rotate(-80 78 58)"/><ellipse cx="118" cy="72" rx="9" ry="3.2" transform="rotate(26 118 72)"/><ellipse cx="100" cy="80" rx="7" ry="3" transform="rotate(-60 100 80)"/><ellipse cx="140" cy="82" rx="8" ry="3" transform="rotate(10 140 82)"/></g></svg>`;
          cleanHtml = cleanHtml.slice(0, invMatch.index + invMatch[0].length) + '\n  ' + FLORAL_SVG + cleanHtml.slice(invMatch.index + invMatch[0].length);
        }
      }
    }

    // Ensure .seen class on redseal animated modules
    cleanHtml = cleanHtml.replace(/class=["']rs-pair["']/gi, 'class="rs-pair seen"');
    cleanHtml = cleanHtml.replace(/class=["']rs-trio["']/gi, 'class="rs-trio seen"');
    cleanHtml = cleanHtml.replace(/class=["']rs-cal["']/gi, 'class="rs-cal seen"');
    cleanHtml = cleanHtml.replace(/class=["']rs-tl["']/gi, 'class="rs-tl seen"');
    cleanHtml = cleanHtml.replace(/class=["']rs-album["']/gi, 'class="rs-album seen"');

    // Normalize any legacy .rs-cover-inner to .rs-top and remove non-original #hero on redseal cards
    cleanHtml = cleanHtml.replace(/openButtons\.forEach\(function\(btn\)\s*\{\s*(?:btn\.__bound\s*=\s*true;\s*)?btn\.addEventListener/, 'openButtons.forEach(function(btn) {\n    btn.__bound = true;\n    btn.addEventListener');
    if (cleanHtml.includes('data-style="redseal"') || cleanHtml.includes('rs-cover')) {
      cleanHtml = cleanHtml.replace(/<div class=["']rs-cover-inner["']>/g, '<div class="rs-top">');
      cleanHtml = cleanHtml.replace(/<section[^>]*id=["']hero["'][^>]*>[\s\S]*?<\/section>/i, '');
      cleanHtml = cleanHtml.replace(/const topSec = document\.querySelector\('\.rs-top, \.envelope-wrapper, #envelope-scene'\);[\s\S]*?return;\s*\}/,
        `const topSec = (cover && cover.querySelector('.rs-top, .rs-cover-inner')) || document.querySelector('.rs-top, .rs-cover-inner, .envelope-wrapper, #envelope-scene');
      if (topSec && !topSec.classList.contains('is-open')) {
        topSec.classList.add('opening');
        setTimeout(function() { topSec.classList.add('is-open'); }, 650);
        setTimeout(function() {
          finishOpen();
        }, 2400);
        return;
      }`);
      cleanHtml = cleanHtml.replace(/const topSec = cover\?\.querySelector\('\.rs-cover-inner, \.rs-top'\)[\s\S]*?return;\s*\}/,
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

    const guardStyle = `<style id="ea-guard-style">\n  [hidden] { display: none !important; }\n  #cover[hidden], .cover[hidden] { display: none !important; visibility: hidden !important; pointer-events: none !important; }\n  html.locked, html.locked body, body.locked { overflow: hidden !important; height: 100% !important; touch-action: none !important; overscroll-behavior: none !important; }\n  .cover.rs-cover { position: fixed; inset: 0; z-index: 100; display: block; padding: 0; background: var(--bg, #f7e6ec); overflow: hidden; transition: opacity .7s cubic-bezier(.2, .8, .2, 1), visibility .7s; }\n  .cover.rs-cover.is-leaving { opacity: 0; visibility: hidden; pointer-events: none; }\n  .cover.rs-cover .rs-top, .cover.rs-cover .rs-cover-inner { width: 100%; max-width: 480px; margin: 0 auto; min-height: 100svh; background: #fff; position: relative; display: grid; justify-items: center; align-content: start; text-align: center; padding: 58px 16px 36px; overflow: hidden; box-shadow: 0 0 50px rgba(163, 29, 52, .06); }\n  .opening .env-flap, .is-open .env-flap { transform: perspective(700px) rotateX(180deg) !important; z-index: 0 !important; }\n  .opening .tap, .is-open .tap { opacity: 0 !important; visibility: hidden !important; transition: opacity .3s; }\n  .is-open .env-photo { height: 158% !important; }\n  .heart svg { width: 24px !important; height: 24px !important; fill: var(--wine, #7b0f1e); stroke: none; display: inline-block; vertical-align: middle; }\n  [data-style="redseal"] #hero, .rs-page #hero, #hero:empty, .m-hero:empty { display: none !important; padding: 0 !important; }\n  [data-style="redseal"] .m-invitation, .rs-page .m-invitation { position: relative; padding-top: 58px !important; overflow: hidden; }\n  .rs-pair > *, .rs-pair.seen > *, .rs-trio img, .rs-trio.seen img, .rs-cal, .rs-cal.seen, .rs-tl li, .rs-tl.seen li, .rs-album .alb, .rs-album.seen .alb { opacity: 1 !important; transform: none !important; visibility: visible !important; }\n  @media (pointer: coarse), (max-width: 768px) {\n    html { scroll-behavior: auto !important; -webkit-overflow-scrolling: touch !important; }\n    .rs-wishes, .wish-list { max-height: none !important; overflow: visible !important; }\n    .sec, .wrap, .inv { touch-action: pan-y !important; -webkit-overflow-scrolling: touch !important; }\n  }\n</style>`;

    if (cleanHtml.includes('id="ea-guard-style"')) {
      cleanHtml = cleanHtml.replace(/<style id=["']ea-guard-style["']>[\s\S]*?<\/style>/i, guardStyle);
    } else if (cleanHtml.includes('</head>')) {
      cleanHtml = cleanHtml.replace('</head>', guardStyle + '\n</head>');
    } else {
      cleanHtml = guardStyle + '\n' + cleanHtml;
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
