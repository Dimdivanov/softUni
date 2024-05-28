const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/create', (req, res) => {
  res.render('create');
});
router.get('/search', (req, res) => {
  res.render('search');
});
router.get('/details/:id', (req, res) => {
  res.render('about');
});

module.exports = router;
