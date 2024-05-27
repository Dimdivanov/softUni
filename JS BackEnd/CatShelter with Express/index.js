const express = require('express');
const handlebars = require('express-handlebars');
const app = express();


const port = 3000;

//Express-handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//Loading css and other files
app.use(express.static('public'));

//Parsing data (post requests)
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);
//Top menu controllers
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/cats/add-breed', (req, res) => {
  res.render('addBreed');
});
app.get('/cats/add-cat', (req, res) => {
  res.render('addCat');
});
//Change Info + New Home controllers
app.get('/change-info', (req, res) => {
  res.render('editCat');
});
app.get('/new-home', (req, res) => {
  res.render('editCat');
});
//Server started on port
app.listen(port, () => {
  console.log('server is up on 30000');
});
