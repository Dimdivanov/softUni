const router = require('express').Router();
const movieManager = require('../managers/movieManager');

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  const newMovie = req.body;
  try {
    await movieManager.create(newMovie);
    res.redirect('/');
  } catch (err) {
    console.log(err.message);
    res.redirect('create');
  }
});

router.get('/:movieId/details', (req, res) => {
  const movie = movieManager.findOne(req.params.movieId);
  if (movie) {
    res.render('details', { movie });
  } else {
    res.status(404).render('404');
  }
});

module.exports = router;
