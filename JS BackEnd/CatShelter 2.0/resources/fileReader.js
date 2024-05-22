const fs = require('fs').promises;
const fr = require('../resources/fragmentsGenerator');
const cats = require('../data/dataCats.json');
const breed = require('../data/dataBreeds.json');

async function fileReader(url, res, content, catId) {
  try {
    let type;
    if (url.endsWith('.css')) {
      type = 'text/css';
    } else if (url.endsWith('.ico')) {
      type = 'image/svg+xml';
    } else {
      type = 'text/html';
    }
    let data = await fs.readFile(url, 'utf-8');

    if (!res.headersSent) {
      res.writeHead(200, { 'Content-Type': type });
    }

    if (content === '{{catInfoContent}}') {
      catId = Number(catId);
      const cat = cats.filter((cat) => cat.id === catId);
      data = data.replace(content, cat.map(fr.catInfoFragment).join('\n'));
    } else if (content === '{{catContent}}') {
      data = data.replace(content, cats.map(fr.catFragment).join('\n'));
    } else if (content === '{{breedMenu}}') {
      data = data.replace(content, breed.map(fr.breedsDropDownMenu).join('\n'));
    } else if (content === '{{shelteroni}}') {
      catId = Number(catId);
      const cat = cats.filter((cat) => cat.id === catId);
      data = data.replace(content, cat.map(fr.shelterTheCat).join('\n'));
    }
    
    res.write(data);
    res.end();
  } catch (err) {
    console.error(err.message);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
    }
    res.write('Internal Server Error');
    res.end();
  }
}

module.exports = {
  fileReader,
};
