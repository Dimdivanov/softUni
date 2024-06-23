const User = require('../models/User');

exports.getInfo = (userId) => User.findById(userId).populate('createdRecipe').populate('recommendRecipe'); //change populate
