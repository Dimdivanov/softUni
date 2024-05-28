const crypto = require('crypto');

function generateRandomId(movie) {
  const inputStr = `${title}${genre}${director}${year}${imageUrl}${rating}${description}${Date.now()}`;
  const id = crypto.createHash('sha256').update(inputStr).digest('hex');
  return id;
}

module.exports = generateRandomId;