const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [2, 'Title should be more than 2 characters.'],
    },
    ingredients: {
      type: String,
      required: true,
      minLength: [10, 'Should be more than 10 characters.'],
      maxLength: [200, 'Should be less than 200 characters.'],
    },
    instructions: {
      type: String,
      required: true,
      minLength: [10, 'Should be more than 10 characters.'],
    },
    description: {
      type: String,
      required: true,
      minLength: [10, 'Should be minimum 10 charaters.'],
      maxLength: [100, 'Should be less than 100 characters.'],
    },
    image: {
      type: String,
      required: true,
      validate: /^https?:\/\//i,
    },
    recommendList: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
