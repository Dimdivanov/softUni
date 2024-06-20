const router = require('express').Router();
const { Error } = require('mongoose');
const authManager = require('../managers/authManager');
const { getErrorMessage } = require('../util/errorUtil');

router.post('/register', async (req, res) => {
  const userData = req.body;
  try {
    await authManager.register(userData);
    res.redirect('/auth/login');
  } catch (err) {
    console.log(err.message);
    res.render('auth/register', { error: getErrorMessage(err) });
  }
});
router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const token = await authManager.login(email, password);
  res.cookie('auth', token);
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
});

module.exports = router;
