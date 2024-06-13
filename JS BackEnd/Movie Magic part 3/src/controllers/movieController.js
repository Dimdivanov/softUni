const router = require('express').Router();
const movieManager = require('../managers/movieManager');
const castManager = require('../managers/castManager');

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

router.get('/:movieId/details', async (req, res) => {
  const movie = await movieManager.findOne(req.params.movieId).lean();
  const cast = await castManager.findOne(req.params.castId).lean();
  if (movie || cast) {
    res.render('details', { movie });
  } else {
    res.status(404).render('404');
  }
});

router.get('/:movieId/attach', async (req, res) => {
  const movie = await movieManager.findOne(req.params.movieId).lean();
  const casts = await castManager.getAll().lean();
  res.render('movie/attach', { ...movie, casts });
});
router.post('/:movieId/attach', async (req, res) => {
  const castId = await castManager.findOne(req.body.cast);
  const movieId = req.params.movieId;
  await castManager.popCast(movieId, castId);
  await movieManager.updateOne(movieId, castId);
  res.redirect(`/movies/${movieId}/attach`);
});

router.get('/:movieId/edit', async (req, res) => {
  const movie = await movieManager.findOne(req.params.movieId).lean();
  res.render('movie/edit', { movie });
});

router.post('/:movieId/edit', async (req, res) => {
  const movie = req.body;
  const movieId = req.params.movieId;
  await movieManager.editMovie(movieId, movie);
  res.redirect(`/movies/${movieId}/details`);
});
module.exports = router;
