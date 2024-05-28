const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

//Handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Express Config
app.use(express.static(path.resolve(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, console.log(`App is running on ${PORT}...`));
