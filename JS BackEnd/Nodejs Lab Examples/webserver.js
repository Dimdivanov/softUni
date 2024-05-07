const http = require('http');

const server = http.createServer((req, res) => {
  console.log('hey 12312312312312312');
  res.write('This is my server!');
  res.end();
});

server.listen(5000);
console.log('Server is running on port 5000...');
