const http = require('http');
const url = require('url');

const { fileReader } = require('./fileReader.js');

const fileRoutes = {
  css: './content/styles/',
  views: './views/',
};

http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    switch (path) {
      case '/':
        fileReader(fileRoutes.views + 'home.html', res);
        break;
      case '/styles/site.css':
        fileReader(fileRoutes.css + 'site.css', res);
        break;
      case '/cats/add-breed':
        fileReader(fileRoutes.views + 'addBreed.html', res);
        break;
      case '/cats/add-cat':
        fileReader(fileRoutes.views + 'addCat.html', res);
        break;
      case '/edit/cat':
        fileReader(fileRoutes.views + 'editCat.html', res);
        break;
      case '/delete/cat':
        res.write('This will delete cat');
        res.end();
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
  })
  .listen(3000, () => {
    console.log('Server is running on port 3000...');
  });
