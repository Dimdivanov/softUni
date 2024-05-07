const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    let path = url.parse(req['url']).pathname;

    if (path === '/') {
      console.log(req['url']);
    }
    res.end();
  })
  .listen(5000);
