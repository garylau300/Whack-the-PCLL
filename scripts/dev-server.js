'use strict';

// Zero-dependency local dev server: serves the static site and mounts
// api/timetable.js at /api/timetable, so the app can be checked in a
// browser before deploying to Vercel. Run with: node scripts/dev-server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const ROOT = path.join(__dirname, '..');
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

const timetableHandler = require('../api/timetable.js');

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/timetable') {
    const query = Object.fromEntries(url.searchParams.entries());
    const fakeRes = {
      _headers: {},
      setHeader(k, v) { this._headers[k] = v; },
      status(code) { this._code = code; return this; },
      send(body) {
        res.writeHead(this._code || 200, this._headers);
        res.end(body);
      },
    };
    try {
      await timetableHandler({ query }, fakeRes);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: String(err) }));
    }
    return;
  }

  const filePath = path.join(ROOT, url.pathname === '/' ? 'index.html' : url.pathname);
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`Dev server on http://localhost:${PORT}`));
