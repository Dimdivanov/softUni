const crypto = require('crypto');

function generateRandomId(movie) {
  const inputStr = `${movie.title}${movie.genre}${movie.director}${movie.year}${movie.imageUrl}${movie.rating}${
    movie.description
  }${Date.now()}`;
  const id = crypto.createHash('sha256').update(inputStr).digest('hex');
  return id;
}

module.exports = generateRandomId;
