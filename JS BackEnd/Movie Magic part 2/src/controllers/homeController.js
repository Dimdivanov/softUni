const router = require('express').Router();
const movieManager = require('../managers/movieManager');

router.get('/', async (req, res) => {
  const foundMovies = await movieManager.getAll().lean();
  res.render('home', { foundMovies });
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/search', async (req, res) => {
  try {
    const { title, genre, year } = req.query;
    const foundMovies = await movieManager.search(title.trim(), genre.trim(), year.trim()).lean();
    res.render('search', { foundMovies });
  } catch (error) {
    console.error('Error searching movies:', error);
    res.status(500).send('An error occurred while searching for movies.');
  }
});
router.get('/404', (req, res) => {
  res.render('404');
});
module.exports = router;
