const http = require('http');
const port = 3000;

http
  .createServer((req, res) => {
    if (req.method == 'POST') {
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      req.on('end', () => {
        console.log(body);
      });
    }
  })
  .listen(port);
