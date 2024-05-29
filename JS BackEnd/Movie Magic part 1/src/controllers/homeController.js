const router = require('express').Router();
const movieManager = require('../managers/movieManager');

router.get('/', (req, res) => {
  const movies = movieManager.getAll();
  res.render('home', { movies });
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/404', (req, res)=>{
  res.render('404');
});
//move these too
router.get('/search', (req, res) => {
  res.render('search');
});

module.exports = router;
