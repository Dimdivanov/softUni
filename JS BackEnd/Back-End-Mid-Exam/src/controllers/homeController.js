const router = require('express').Router();
const recipeService = require('../services/recipeService');

router.get('/', async (req, res) => {
  const recipes = await recipeService.getLatest().lean();
  res.render('home', { recipes });
});

router.get('/search', async (req, res) => {
  try {
    const name = req.query.search;
    const recipeFound = await recipeService.search(name).lean();
    res.render('search', { recipeFound });
  } catch (err) {
    res.render('search', { error: getErrorMessage(err) });
  }
});

module.exports = router;
