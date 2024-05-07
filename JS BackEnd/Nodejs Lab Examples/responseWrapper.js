const http = require('http');

http
  .createServer((req, res) => {
    console.log(req.method);
    console.log(req.headers.host);
    console.log(req.url);

    res.writeHead(200, {
      //response status code

      CustomHeader: 'some value',
    });

    res.write('This is my response');
    res.end();
  })
  .listen(5000);
