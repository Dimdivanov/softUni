const router = require('express').Router();
const movieManager = require('../managers/movieManager');
const idGen = require('../managers/idGenerator')

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const { id, title, genre, director, year, imageUrl, rating, description } = req.body;

  idGen()
  movieManager.create({id, title, genre, director, year, imageUrl, rating, description});
  res.redirect('/');
});
module.exports = router;
