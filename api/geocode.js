export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();

    const { q } = req.query;
    if (!q) return res.status(400).json({ error: 'Missing query param q' });

    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`;
        const r = await fetch(url, {
            headers: {
                'User-Agent': 'NOX-Detective/1.0 (https://nox-ai.vercel.app)',
                'Accept-Language': 'en'
            }
        });
        const data = await r.json();
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
