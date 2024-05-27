const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const addBreed = require('../src/addBreedUtil');
const dataJson = require('../src/data/dataCats.json');
const dataBreedJson = require('../src/data/dataBreeds.json');

const port = 3000;

//Express-handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//Loading css and other files
app.use(express.static('public'));

//Parsing data (post requests)
const bodyParser = express.urlencoded({ extended: true });
app.use(bodyParser);
//Top menu controllers
app.get('/', (req, res) => {
  res.render('home', { cats: dataJson });
});
app.get('/cats/add-breed', (req, res) => {
  res.render('addBreed');
});
app.post('/cats/add-breed', async (req, res) => {
  const breedName = req.body.breed;
  addBreed(breedName, res);
});
app.get('/cats/add-cat', (req, res) => {
  res.render('addCat');
});
//Change Info + New Home controllers
app.get('/change-info/:id', (req, res) => {
  const catId = Number(req.params.id);
  const cat = dataJson.find((cat) => cat.id === catId);
  res.render('editCat', { cat, breed: dataBreedJson });
});
app.post('/change-info/:id', (req, res) => {
  console.log(req.body);
});
app.get('/new-home', (req, res) => {
  res.render('editCat');
});
//Server started on port
app.listen(port, () => {
  console.log('server is up on 3000');
});
