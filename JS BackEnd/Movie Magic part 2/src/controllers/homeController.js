const router = require('express').Router();
const movieManager = require('../managers/movieManager');

router.get('/', async (req, res) => {
  const foundMovies = await movieManager.getAll().lean();
  res.render('home', { foundMovies });
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/404', (req, res) => {
  res.render('404');
});
router.get('/search', (req, res) => {
  res.render('search');
});

module.exports = router;

//remember
//req.params - parameters
//req.body - parsed post data
//req.query
