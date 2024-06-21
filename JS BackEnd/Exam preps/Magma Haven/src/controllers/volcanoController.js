const router = require('express').Router();

router.get('/catalog', async (req, res) => {
  res.render('volcano/catalog');
});

router.get('/create', async (req, res) => {
  res.render('volcano/create');
});

router.get('/create', async (req, res) => {
  res.render('volcano/create');
});

module.exports = router;
