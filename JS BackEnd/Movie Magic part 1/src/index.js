const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

//Handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Express Config -- path had to be changed
app.use(express.static(path.resolve(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/create', (req, res) => {
  res.render('create');
});
app.get('/search', (req, res) => {
  res.render('search');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(PORT, console.log(`App is running on ${PORT}...`));
