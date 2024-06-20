const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const partsController = require('./controllers/partsController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/parts', partsController);

router.all('*', (req, res) => {
  res.render('404');
});

module.exports = router;
