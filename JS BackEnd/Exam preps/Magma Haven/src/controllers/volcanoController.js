const router = require('express').Router();
const authService = require('../services/authService');
const { userIsLogged, isAuth } = require('../middlewares/authMiddleware');


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
