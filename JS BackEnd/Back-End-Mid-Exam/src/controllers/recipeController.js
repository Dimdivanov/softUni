const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');
const recipeService = require('../services/recipeService');

//catalog page / recipes
router.get('/catalog', async (req, res) => {
  const recipes = await recipeService.getAll().lean();
  res.render('recipe/catalog', { recipes });
});
//creating a recipe
router.get('/create', isAuth, (req, res) => {
  res.render('recipe/create');
});
router.post('/create', isAuth, async (req, res) => {
  const recipeData = req.body;
  try {
    await recipeService.create(req.user._id, recipeData);
    res.redirect('catalog');
  } catch (err) {
    res.render('recipe/create', { ...recipeData, error: getErrorMessage(err) });
  }
});
//details
router.get('/:recipeId/details', async (req, res) => {
  const recipe = await recipeService.getOneDetailed(req.params.recipeId).lean();
  const recCounter = recipe.recommendList.length || 0;

  const isOwner = recipe.owner && recipe.owner._id == req.user?._id;
  const isRecommend = recipe.recommendList.some((user) => user._id == req.user?._id);

  res.render('recipe/details', { ...recipe, isOwner, isRecommend, recCounter });
});

//edit
router.get('/:recipeId/edit', isOwner, async (req, res) => {
  const recipe = await recipeService.getOne(req.params.recipeId).lean();
  res.render('recipe/edit', { ...recipe });
});
router.post('/:recipeId/edit', isOwner, async (req, res) => {
  const recipeData = req.body;
  try {
    await recipeService.updateOne(req.params.recipeId, recipeData).lean();
    res.redirect(`/recipe/${req.params.recipeId}/details`);
  } catch (err) {
    res.render('recipe/edit', { ...recipeData, error: getErrorMessage(err) });
  }
});

//recommending
router.get('/:recipeId/recommend', isAuth, async (req, res) => {
  await recipeService.recommend(req.params.recipeId, req.user._id);

  res.redirect('details');
});

//delete
router.get('/:recipeId/delete', isOwner, async (req, res) => {
  await recipeService.delete(req.params.recipeId);
  res.redirect('/recipe/catalog');
});

async function isOwner(req, res, next) {
  const recipe = await recipeService.getOne(req.params.recipeId);
  if (recipe.owner != req.user?._id) {
    return res.redirect(`/recipe/${req.params.recipeId}/details`);
  }
  next();
}

module.exports = router;
