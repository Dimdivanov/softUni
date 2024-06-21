const router = require('express').Router();
const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');
const { userIsLogged, isAuth } = require('../middlewares/authMiddleware');

//register
router.get('/register', userIsLogged, async (req, res) => {
  res.render('auth/register');
});
router.post('/register', userIsLogged, async (req, res) => {
  const userData = req.body;
  try {
    const token = await authService.register(userData);
    res.cookie('auth', token);
    //path may change
    res.redirect('/');
  } catch (err) {
    res.render('auth/register', { ...userData, error: getErrorMessage(err) });
  }
});

//login
router.get('/login', userIsLogged, async (req, res) => {
  res.render('auth/login');
});
router.post('/login', userIsLogged, async (req, res) => {
  const loginData = req.body;
  try {
    const token = await authService.login(loginData);

    res.cookie('auth', token);
    //might change on requirements
    res.redirect('/');
  } catch (err) {
    res.render('auth/login', { ...loginData, error: getErrorMessage(err) });
  }
});

//logout
router.get('/logout', isAuth, (req, res) => {
  res.clearCookie('auth');
  //might change on requirements
  res.redirect('/');
});

module.exports = router;
