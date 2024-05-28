const fs = require('fs').promises;
const path = require('path');
const dataBreedJson = require('./data/dataBreeds.json');

async function addBreed(breed, res) {
  if (!breed) {
    res.send('Error cant be empty');
    return;
  }

  dataBreedJson.push(breed);
  const dataBreedsFilePath = path.join(__dirname, 'data', 'dataBreeds.json');

  try {
    fs.writeFile(dataBreedsFilePath, JSON.stringify(dataBreedJson, null, 2));
    res.redirect('/cats/add-breed');
  } catch (error) {
    console.error('Error writing breeds file:', error);
    res.send('Error adding breed');
  }
}

module.exports = addBreed;
