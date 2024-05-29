const dataMovies = require('../config/database.json');

exports.getAll = (search, genre, year) => {
  let filteredMovies = dataMovies.slice();

  if (search) {
    filteredMovies = filteredMovies.filter((movie) => movie.title.includes(search));
  }
  if (genre) {
    filteredMovies = filteredMovies.filter((movie) => movie.genre.includes(genre));
  }
  if (year) {
    filteredMovies = filteredMovies.filter((movie) => movie.year === parseInt(year));
  }
  return filteredMovies;
};

exports.create = (movieData) => {
  dataMovies.push(movieData);
  return dataMovies;
};

exports.findOne = (movieId) => {
  const movie = dataMovies.find((movie) => movie.id === movieId);
  return movie;
};
