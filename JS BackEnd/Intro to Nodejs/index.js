const http = require('http');
const url = require('url');

const siteCss = require('./resources/content/styles/site');
const addBreedHtml = require('./resources/views/addBreed');
const { addCatHtml, breedOpt } = require('./resources/views/addCat');
const newHomeHtml = require('./resources/views/catShelter');
const { homeTemplate, catTemplate } = require('./resources/views/home/index');
const { editCatHtml, editCatTemplate } = require('./resources/views/editCat');
const { cats, breeds } = require('./data/data');

const port = 3000;

const server = http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    const pathEnd = path.slice(-1);
    const match = /{{\b([^{}]+)\b}}/g;

    switch (path) {
      case '/':
        if (req.method === 'GET' && req.url === '/') {
          const catsHtml = cats
            .map((cat) => {
              return catTemplate.replace(match, (matchExact, group) => {
                if (group === 'id') {
                  return cat[group];
                }
                return cat[group.trim()]; //cat[key] and replace it with the match
              });
            })
            .join('');
          const homeHtml = homeTemplate.replace('{{cats}}', catsHtml);
          res.writeHead(200, {
            'Content-Type': 'text/html',
          });
          res.write(homeHtml);
        }
        break;
      case '/styles/site.css':
        res.writeHead(200, {
          'Content-Type': 'text/css',
        });
        res.write(siteCss);
        break;
      case '/cats/add-breed':
        if (req.method === 'GET' && req.url === '/cats/add-breed') {
          res.writeHead(200, {
            'Content-Type': 'text/html',
          });
          res.write(addBreedHtml);
        }

        break;
      case '/cats/add-cat':
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write(addCatHtml);
        break;
      case '/cats/edit-cat/' + pathEnd:
        if (req.method === 'GET' && req.url === '/cats/edit-cat/' + pathEnd) {
          const editCatForm = cats
            .filter((obj) => obj.id == pathEnd)
            .map((cat) => {
              return editCatTemplate.replace(match, (matchExact, group) => {
                if (group === 'id') {
                  return cat[group];
                }
                return cat[group.trim()]; //cat[key] and replace it with the match
              });
            })
            .join('');
          const editHtml = editCatHtml.replace('{{form}}', editCatForm);
          res.writeHead(200, {
            'Content-Type': 'text/html',
          });
          res.write(editHtml);
        }
        break;
      case '/cats/delete-cat':
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write(newHomeHtml);
        break;
      default:
        res.writeHead(404);
        res.write('Page Not Found!');
    }

    res.end();
  })
  .listen(port, () => console.log('Server is running on port 3000...'));
