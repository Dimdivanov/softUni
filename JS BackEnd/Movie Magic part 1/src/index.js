const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');

const app = express();
const PORT = 3000;

expressConfigurator(app);
handlebarsConfigurator(app);

//use my router
app.use(homeController);
app.use('/movies', movieController);
app.use('/movies/:movieId', movieController);
//all routes that aren't existing redirect to 404
app.get('*', (req, res) => {
  res.redirect('/404');
});

app.listen(PORT, console.log(`App is running on ${PORT}...`));
