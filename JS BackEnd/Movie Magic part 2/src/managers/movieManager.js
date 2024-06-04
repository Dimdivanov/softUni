const dataMovies = require('../config/database.json');

exports.getAll = (search, genre, year) => {
  return dataMovies
    .slice()
    .filter(
      (movie) =>
        (!search || movie.title.includes(search)) &&
        (!genre || movie.genre.includes(genre)) &&
        (!year || movie.year === parseInt(year))
    );
};

exports.create = (movieData) => {
  dataMovies.push(movieData);
  return dataMovies;
};

exports.findOne = (movieId) => {
  const movie = dataMovies.find((movie) => movie.id === movieId);
  return movie;
};
