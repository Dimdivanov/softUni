const router = require('express').Router();
const dataMovies = require('../config/database.json');

router.get('/', (req, res) => {
  res.render('home', { movies: dataMovies });
});
router.get('/about', (req, res) => {
  res.render('about');
});
//move these too
router.get('/search', (req, res) => {
  res.render('search');
});

module.exports = router;
