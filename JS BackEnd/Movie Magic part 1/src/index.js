const express = require('express');
const handlebars = require('express-handlebars');

const expressConfig = require('./config/expressConfig');

const app = express();
const PORT = 3000;

expressConfig(app);

//Handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

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
