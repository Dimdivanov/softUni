const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});
router.get('/about', (req, res) => {
  res.render('about');
});
//move these too
router.get('/search', (req, res) => {
  res.render('search');
});


module.exports = router;
