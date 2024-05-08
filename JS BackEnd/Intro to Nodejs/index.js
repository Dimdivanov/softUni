const http = require('http');
const url = require('url');

const siteCss = require('./resources/content/styles/site');
const homeHtml = require('./resources/views/home/index');
const addBreedHtml = require('./resources/views/addBreed');
const addCatHtml = require('./resources/views/addCat');
const editCatHtml = require('./resources/views/editCat');

const port = 3000;

const server = http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    switch (path) {
      case '/':
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write(homeHtml);
        break;
      case '/styles/site.css':
        res.writeHead(200, {
          'Content-Type': 'text/css',
        });
        res.write(siteCss);
        break;
      case '/cats/add-breed':
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write(addBreedHtml);
        break;
      case '/cats/add-cat':
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write(addCatHtml);
        break;

      default:
        res.writeHead(404);
        res.write('Page Not Found!');
    }

    res.end();
  })
  .listen(port, () => console.log('Server is running on port 3000...'));
