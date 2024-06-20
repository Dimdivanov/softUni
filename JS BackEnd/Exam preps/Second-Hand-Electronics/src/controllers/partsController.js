const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');
const partsService = require('../services/partsService');

router.get('/catalog', async (req, res) => {
  const parts = await partsService.getAll().lean();
  res.render('parts/catalog', { parts });
});
//create
router.get('/create', isAuth, (req, res) => {
  res.render('parts/create');
});

router.post('/create', isAuth, async (req, res) => {
  const partData = req.body;
  try {
    await partsService.create(req.user._id, partData);
    res.redirect('catalog');
  } catch (err) {
    res.render('parts/create', { ...partData, error: getErrorMessage(err) });
  }
});
//details
router.get('/:partId/details', async (req, res) => {
  const part = await partsService.getOneDetailed(req.params.partId).lean();

  const isOwner = part.owner && part.owner._id == req.user?._id;
  const isBuying = part.buyingList.some((user) => user._id == req.user?._id);

  res.render('parts/details', { ...part, isOwner, isBuying });
});
//buy
router.get('/:partId/buy', async (req, res) => {
  await partsService.buyUp(req.params.partId, req.user._id);
  res.redirect('details');
});

//edit
router.get('/:partId/edit', isOwner, async (req, res) => {
  const part = await partsService.getOne(req.params.partId).lean();
  res.render('parts/edit', { ...part });
});

router.post('/:partId/edit', isOwner, async (req, res) => {
  const partData = req.body;
  try {
    await partsService.updateOne(req.params.partId, partData).lean();
    res.redirect(`/parts/${req.params.partId}/details`);
  } catch (err) {
    res.render('parts/edit', { ...partData, error: getErrorMessage(err) });
  }
});

//delete
router.get('/:partId/delete', isOwner, async (req, res) => {
  await partsService.delete(req.params.partId);
  res.redirect('/parts/catalog');
});

//checking if its the owner
async function isOwner(req, res, next) {
  const part = await partsService.getOne(req.params.partId);
  if (part.owner != req.user?._id) {
    return res.redirect(`/parts/${req.params.partId}/details`);
  }
  next();
}

module.exports = router;
