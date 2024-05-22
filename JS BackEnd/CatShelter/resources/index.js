const http = require('http');
const url = require('url');
const formidable = require('formidable');

const { fileReader } = require('./fileReader.js');

const fileRoutes = {
  css: './content/styles/',
  icon: './content/images/',
  views: './views/',
};

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;
    const catId = path.split('/').pop();
    let content;

    switch (path) {
      case '/':
        content = '{{catContent}}';
        fileReader(fileRoutes.views + 'home.html', res, content);
        break;
      case '/styles/site.css':
        fileReader(fileRoutes.css + 'site.css', res);
        break;
      case '/content/images/pawprint.ico':
        fileReader(fileRoutes.icon + 'pawprint.ico', res);
        break;
      case '/cats/add-breed':
        fileReader(fileRoutes.views + 'addBreed.html', res);
        break;
      case '/cats/add-cat':
        content = '{{breedMenu}}';
        fileReader(fileRoutes.views + 'addCat.html', res, content);
        break;
      case '/edit/cat/' + catId:
        if (req.method === 'POST') {
          const form = new formidable.IncomingForm();
          form.parse(req, (err, fields, files) => {
            const editedCat = {};
            console.log('Fields:', fields);
            (editedCat['name'] = fields.name), console.log(editedCat);
            res.writeHead(302, { Location: '/edit/cat/' + catId });
            res.end();
          });
        } else {
          content = '{{catInfoContent}}';
          fileReader(fileRoutes.views + 'editCat.html', res, content, catId);
        }
        break;
      case '/delete/cat/' + catId:
        content = '{{shelteroni}}';
        fileReader(fileRoutes.views + 'catShelter.html', res, content, catId);
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
