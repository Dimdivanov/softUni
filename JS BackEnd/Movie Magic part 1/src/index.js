const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');

const app = express();
const PORT = 3000;

expressConfigurator(app);
handlebarsConfigurator(app);

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
