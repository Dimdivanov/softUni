const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const port = 3000;

//express-handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//loading css and other files
app.use(express.static('public'));

//parsing data
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cats/add-breed', (req, res) => {
  res.render('addBreed');
});
app.get('/cats/add-cat', (req, res) => {
    res.render('addCat');
  });
app.listen(port, () => {
  console.log('server is up on 30000');
});
