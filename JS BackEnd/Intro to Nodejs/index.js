const http = require('http');
const url = require('url');

const siteCss = require('./resources/content/styles/site');
const { homeTemplate, catTemplate } = require('./resources/views/home/index');
const addBreedHtml = require('./resources/views/addBreed');
const { addCatHtml, breedOption } = require('./resources/views/addCat');
const { editCatHtml, editCatTemplate } = require('./resources/views/editCat');
const newHomeHtml = require('./resources/views/catShelter');

const port = 3000;
const cats = [
  {
    id: 1,
    name: 'Kircho',
    breed: 'Orange Taby',
    description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    imageUrl: 'https://i.pinimg.com/736x/b0/d8/4f/b0d84f86386c80f2a8ed95df5a23673d.jpg',
  },
  {
    id: 2,
    name: 'Kirka',
    breed: 'Siamese',
    description: 'Look at this distinguished gentleman, look at the way he is sitting, myeaa',
    imageUrl:
      'https://preview.redd.it/polite-little-paws-v0-9nsssk2enxfb1.jpg?width=1080&crop=smart&auto=webp&s=7c9e0f7b1ea0a6bf847430999b4cc21e0dc443a8',
  },
  {
    id: 3,
    name: 'Prascho',
    breed: 'Scottish Fold',
    description: "This cat isn't born with two chins it's just FAT",
    imageUrl: 'https://img.freepik.com/premium-photo/beautiful-gray-blue-adult-fat-scottish-fold-cat_280191-389.jpg',
  },
];
const breeds = [];

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
