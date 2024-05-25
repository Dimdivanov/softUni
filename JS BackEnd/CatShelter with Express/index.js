const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const port = 3000;

//express-handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

//loading css and other files
app.use(express.static('public'));

//parsing data
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log('server is up on 30000');
});
