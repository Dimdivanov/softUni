const router = require('express').Router();
const movieManager = require('../managers/movieManager');
const castManager = require('../managers/castManager');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/create', isAuth, (req, res) => {
  res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
  const newMovie = {
    ...req.body,
    owner: req.user._id,
  };

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
  const isOwner = movie.owner && movie.owner == req.user?._id;

  res.render('details', { movie, isOwner });
});

router.get('/:movieId/attach', isAuth, async (req, res) => {
  const movie = await movieManager.findOne(req.params.movieId).lean();
  const casts = await castManager.getAll().lean();
  res.render('movie/attach', { ...movie, casts });
});
router.post('/:movieId/attach', isAuth, async (req, res) => {
  const castId = await castManager.findOne(req.body.cast);
  const movieId = req.params.movieId;
  await castManager.popCast(movieId, castId);
  await movieManager.updateOne(movieId, castId);
  res.redirect(`/movies/${movieId}/attach`);
});

router.get('/:movieId/edit', isAuth, async (req, res) => {
  if (!req.user) {
    return res.redirect('/auth/login');
  }
  const movie = await movieManager.findOne(req.params.movieId).lean();
  res.render('movie/edit', { movie });
});

router.get('/:movieId/delete', isAuth, async (req, res) => {
  const movieId = req.params.movieId;
  await movieManager.del(movieId);
  res.redirect('/');
});

router.post('/:movieId/edit', isAuth, async (req, res) => {
  const movie = req.body;
  const movieId = req.params.movieId;

  await movieManager.editMovie(movieId, movie);
  res.redirect(`/movies/${movieId}/details`);
});

module.exports = router;
