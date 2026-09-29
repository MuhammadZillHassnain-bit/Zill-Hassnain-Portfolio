const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  if (cleanUrl === '/') cleanUrl = '/index.html';
  if (cleanUrl === '/portfolio' || cleanUrl === '/portfolio/') cleanUrl = '/portfolio/index.html';

  const safePath = path.normalize(decodeURIComponent(cleanUrl)).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  function serveFile(targetPath, fileStats) {
    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': fileStats.size,
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(targetPath);
    stream.pipe(res);
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (indexErr || !indexStats.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.end(`<h1>404 Not Found</h1><p>The requested path ${cleanUrl} was not found.</p>`);
          return;
        }
        serveFile(indexPath, indexStats);
      });
      return;
    }

    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`<h1>404 Not Found</h1><p>The requested file ${cleanUrl} was not found.</p>`);
      return;
    }

    serveFile(filePath, stats);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio server is live!`);
  console.log(`Local Access: http://localhost:${PORT}`);
  console.log(`Root directory: ${PUBLIC_DIR}`);
});
