const http = require('http');
const url = require('url');
const fs = require('fs');

const { catShelterHtmlTemplate } = require('./resources/views/catShelter');
const siteCss = require('./resources/content/styles/site');
const addBreedHtml = require('./resources/views/addBreed');
const { addCatHtml, breedOpt } = require('./resources/views/addCat');
const { homeTemplate, catTemplate } = require('./resources/views/home/index');
const { editCatHtml, editCatTemplate } = require('./resources/views/editCat');
const { cats, breeds } = require('./data/data');

const port = 3000;

function serveHomePage(req, res) {
  const catsHtml = cats
    .map((cat) => {
      return catTemplate.replace(/{{\b([^{}]+)\b}}/g, (matchExact, group) => {
        if (group === 'id') {
          return cat[group];
        }
        return cat[group.trim()];
      });
    })
    .join('');
  const homeHtml = homeTemplate.replace('{{cats}}', catsHtml);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(homeHtml);
}

function serveCssFile(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(siteCss);
}

function serveAddBreedPage(req, res) {
  if (req.url === '/cats/add-breed') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  } else if (req.url.includes('?breed=')) {
    const breed = req.url
      .match(/(?<==)([^#]+)/g)
      .join()
      .replace(/[^a-zA-Z0-9\s]+/g, ' ');
    breeds.push(breed);
  }
  res.write(addBreedHtml);
}

function serveAddCatPage(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const catBreed = breeds.map((breed) => {
    return breedOpt.replace(/{{\b([^{}]+)\b}}/g, (group) => {
      return breed.toString();
    });
  });
  const addCatMarkup = addCatHtml.replace('{{breedOpt}}', catBreed);
  res.write(addCatMarkup);
}

function serveEditCatPage(req, res, pathEnd) {
  if (req.url === '/cats/edit-cat/' + pathEnd) {
    const editCatForm = cats
      .filter((obj) => obj.id == pathEnd)
      .map((cat) => {
        return editCatTemplate.replace(/{{\b([^{}]+)\b}}/g, (matchExact, group) => {
          if (group === 'id') {
            return cat[group];
          }
          return cat[group.trim()];
        });
      })
      .join('');
    const editHtml = editCatHtml.replace('{{form}}', editCatForm);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(editHtml);
  }
}

function serveDeleteCatPage(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(catShelterHtmlTemplate);
}

function serveNotFoundPage(res) {
  res.writeHead(404);
  res.write('Page Not Found!');
}

http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    const pathEnd = path.slice(-1);

    switch (path) {
      case '/':
        serveHomePage(req, res);
        break;
      case '/styles/site.css':
        serveCssFile(req, res);
        break;
      case '/cats/add-breed':
        serveAddBreedPage(req, res);
        break;
      case '/cats/add-cat':
        serveAddCatPage(req, res);
        break;
      case '/cats/edit-cat/' + pathEnd:
        serveEditCatPage(req, res, pathEnd);
        break;
      case '/cats/delete-cat':
        serveDeleteCatPage(req, res);
        break;
      default:
        serveNotFoundPage(res);
    }

    res.end();
  })
  .listen(port);
