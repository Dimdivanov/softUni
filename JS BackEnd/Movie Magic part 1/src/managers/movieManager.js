const dataMovies = require('../config/database.json');

exports.create = (movieData) => {
  dataMovies.push(movieData);
};
