const Movie = require('../models/Movie');

exports.getAll = async () => {
  const movies = await Movie.find({}).lean();
  return movies;
};

exports.create = async (movieData) => {
  const result = await Movie.create(movieData);
  return result;
};

exports.findOne = (movieId) => {
  const movie = Movie.find(movieId);
  return movie;
};
