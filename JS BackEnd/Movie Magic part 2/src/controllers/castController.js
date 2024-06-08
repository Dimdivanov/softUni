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
//get details of cast findOne
//attach all casts to movies
module.exports = router;
