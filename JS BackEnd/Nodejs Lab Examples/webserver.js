const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Server is called...');
  res.write('This is my server!');
  res.end();
});

server.listen(5000);
console.log('Server is running on port 5000...');
