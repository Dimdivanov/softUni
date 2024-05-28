const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 3000;

//Handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs'}))
app.set('view engine', 'hbs');

//Routes
app.get('/', (req, res) => {
  res.send('hello');
});


app.listen(PORT, console.log(`App is running on ${PORT}...`));
