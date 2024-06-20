const router = require('express').Router();
const partsService = require('../services/partsService');

router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/search', async (req, res) => {
  try {
    const { name, type } = req.query;
    const partFound = await partsService.search(name, type).lean();
    res.render('search', { partFound });
  } catch (err) {
    res.render('search', { error: getErrorMessage(err) });
  }
});

module.exports = router;
