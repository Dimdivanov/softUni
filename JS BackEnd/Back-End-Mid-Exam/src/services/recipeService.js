const Recipe = require('../models/Recipe');
const User = require('../models/User');

//create
exports.create = async (userId, recipeData) => {
  const createdRecipe = await Recipe.create({
    owner: userId,
    ...recipeData,
  });
  await User.findByIdAndUpdate(userId, { $addToSet: { createdRecipe: createdRecipe._id } });
  return createdRecipe;
};
//catalogs
exports.getAll = () => Recipe.find();

//details
exports.getOne = (recipeId) => Recipe.findById(recipeId);
exports.getOneDetailed = (recipeId) => this.getOne(recipeId).populate('owner').populate('recommendList');

//get latest 3
exports.getLatest = () => Recipe.find().sort({ createdAt: -1 }).limit(3);


//when recommending
exports.recommend = async (recipeId, userId) => {
  await Recipe.findByIdAndUpdate(recipeId, { $addToSet: { recommendList: userId } });
  await User.findByIdAndUpdate(userId, { $addToSet: { recommendRecipe: recipeId } });
};

//delete
exports.delete = (recipeId) => Recipe.findByIdAndDelete(recipeId);

//edit and update
exports.updateOne = (recipeId, recipeData) => Recipe.findByIdAndUpdate(recipeId, recipeData, { runValidators: true });

//search
exports.search = (title) => {
  let query = {};
  if (title) {
    query.title = { $regex: new RegExp(title, 'i') };
  }
  return Recipe.find(query);
};
