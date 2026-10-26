const CARD_IDS = new Set([
  'botanical-trung-duong-kim-loan-mvm26y7c',
  'hoatinhdo-trung-duong-kim-loan-mvm2htd8',
  'redseal-trung-duong-kim-loan-mvm1r726'
]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  text = String(text || '').replace(/^\uFEFF/, '');

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"' && field.length === 0) {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n' || char === '\r') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      if (char === '\r' && text[i + 1] === '\n') i += 1;
    } else {
      field += char;
    }
  }

  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function json(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=10, stale-while-revalidate=20');
  return res.status(status).send(JSON.stringify(body));
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return json(res, 405, { ok: false, error: 'method_not_allowed' });
  }

  const cardId = String(req.query.cardId || '').trim();
  if (!CARD_IDS.has(cardId)) {
    return json(res, 400, { ok: false, error: 'invalid_card_id' });
  }

  const feedUrl = process.env.GUESTBOOK_PUBLIC_CSV_URL || 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRs_6j60PZLRbYhHPQJz578v2brgLbUWvvOA2bDWGBszxKYYEOwy7gSOxo1fT9BVOSfU40TSI2A67yQ/pub?gid=262492117&single=true&output=csv';

  try {
    const feed = await fetch(feedUrl, {
      cache: 'no-store',
      headers: { Accept: 'text/csv' }
    });
    if (!feed.ok) throw new Error(`Published guestbook feed returned ${feed.status}`);

    const rows = parseCsv(await feed.text());
    const entries = rows.slice(1).map((cells, index) => ({
      id: String(index + 2),
      at: String(cells[0] || '').trim(),
      cardId: String(cells[1] || '').trim(),
      name: String(cells[2] || '').trim().slice(0, 80),
      relation: String(cells[3] || '').trim().slice(0, 80),
      message: String(cells[4] || '').trim().slice(0, 1000)
    })).filter(entry => entry.name && entry.message);

    return json(res, 200, { ok: true, cardId, entries: entries.reverse() });
  } catch (error) {
    console.error('Guestbook feed error:', error.message);
    return json(res, 502, { ok: false, error: 'guestbook_feed_unavailable' });
  }
}
