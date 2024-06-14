const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();
exports.create = (movieData) => Movie.create(movieData);
exports.findOne = (movieId) => Movie.findById(movieId).populate('cast');
exports.updateOne = (movieId, castId) => {
  return Movie.findByIdAndUpdate(movieId, { $addToSet: { cast: castId } });
};
exports.editMovie = (movieId, movie) => {
  return Movie.findByIdAndUpdate(movieId, movie);
};
exports.del = (movieId) => {
  return Movie.findByIdAndDelete(movieId);
};
//populate the movies with cast data.
exports.search = (title, genre, year) => {
  let query = {};
  if (title) {
    query.title = { $regex: new RegExp(title, 'i') };
  }

  if (genre) {
    query.genre = { $regex: new RegExp(genre, 'i') };
  }

  if (year) {
    const parsedYear = parseInt(year, 10);
    if (!isNaN(parsedYear)) {
      query.year = parsedYear;
    }
  }
  return Movie.find(query);
};
