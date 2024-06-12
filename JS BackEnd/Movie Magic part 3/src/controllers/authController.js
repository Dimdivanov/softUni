const router = require('express').Router();

router.get('/register', (req, res) => {
  console.log('in register');
  res.render('auth/register');
});

module.exports = router;
