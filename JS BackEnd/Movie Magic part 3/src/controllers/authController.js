const router = require('express').Router();
const authManager = require('../managers/authManager');

router.get('/register', (req, res) => {
  res.render('auth/register');
});
router.post('/register', async (req, res) => {
  const userData = req.body;
  await authManager.register(userData);
  res.redirect('auth/login');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const token = await authManager.login(email, password);
  console.log(token);
  res.redirect('/')
});
module.exports = router;
