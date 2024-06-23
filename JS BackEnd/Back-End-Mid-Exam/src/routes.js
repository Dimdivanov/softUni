const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const recipeController = require('./controllers/recipeController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/recipe', recipeController);

router.all('*', (req, res) => {
  res.render('404');
});

module.exports = router;
