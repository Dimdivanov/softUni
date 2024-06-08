const Cast = require('../models/Cast');

exports.create = (castData) => Cast.create(castData);
exports.findOne = (castData) => Cast.findById(castData).populate('movie');
exports.findMovieCast = (castData) => Movie.find(castData);
exports.getAll = () => Cast.find();
exports.popCast = (movieId, castId) => {
    return Cast.findByIdAndUpdate(castId, { $addToSet: { movie: movieId } });
  };