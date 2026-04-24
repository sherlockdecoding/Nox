export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { ql } = req.body;
    if (!ql) return res.status(400).json({ error: 'Missing ql in body' });

    try {
        const r = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'NOX-Detective/1.0 (https://nox-ai.vercel.app)'
            },
            body: 'data=' + encodeURIComponent(ql)
        });
        const data = await r.json();
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
          }
