import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3003;

// Search V3 first, then V2, then V1 for assets
const SEARCH_ROOTS = [
  __dirname,
  path.join(__dirname, '..', 'V2 (grey, white)'),
  path.join(__dirname, '..', 'V1 (blue, gold)'),
];

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  for (const root of SEARCH_ROOTS) {
    const filePath = path.join(root, urlPath);
    const resolvedRoot = path.resolve(root);
    const resolvedFile = path.resolve(filePath);
    if (!resolvedFile.startsWith(resolvedRoot)) continue;
    try {
      const stat = fs.statSync(resolvedFile);
      if (stat.isFile()) {
        const ext = path.extname(resolvedFile).toLowerCase();
        const contentType = MIME[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(resolvedFile).pipe(res);
        return;
      }
    } catch (_) {}
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

server.listen(PORT, () => {
  console.log(`Serving V3 at http://localhost:${PORT}`);
});
