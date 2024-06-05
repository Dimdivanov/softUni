const router = require('express').Router();
const castManager = require('../managers/castManager');

router.get('/create', (req, res) => {
  res.render('cast/create');
});
router.post('/create', async (req, res) => {
  const castData = req.body;
  await castManager.create(castData);
  res.redirect('/');
});

module.exports = router;
