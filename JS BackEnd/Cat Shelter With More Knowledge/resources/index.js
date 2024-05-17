const http = require('http');
const url = require('url');
const fs = require('fs');

const indexHtmlTemplate = require('./views/home/index');
http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.write(indexHtmlTemplate);
    res.end();
  })
  .listen(3000);
