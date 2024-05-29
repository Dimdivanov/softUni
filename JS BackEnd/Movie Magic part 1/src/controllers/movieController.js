const router = require('express').Router();
const movieManager = require('../managers/movieManager');
const genId = require('../managers/idGenerator');

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const { title, genre, director, year, imageUrl, rating, description } = req.body;
  const ratingNumber = Number(rating);
  const id = genId({ title, genre, director, year, imageUrl, rating, description });

  movieManager.create({ id, title, genre, director, year, imageUrl, rating: ratingNumber, description });
  res.redirect('/');
});

router.get('/:movieId', (req, res) => {
  console.log(req.params);
  const movie = movieManager.find(req.params.movieId);
  if (movie) {
    res.render('details', { movie });
  } else {
    res.status(404).send('Movie not found');
  }
});

module.exports = router;
