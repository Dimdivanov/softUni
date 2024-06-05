const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
    min: [1878, 'Cannot be before {VALUE}'],
    max: [2025, 'Cannot be after {VALUE}'],
  },
  rating: {
    type: Number,
    required: true,
    min: [0, "Rating can't be below {VALUE} stars"],
    max: [10, "Rating can't be above {VALUE} stars"],
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1000,
  },
  image: {
    type: String,
    required: true,
    match: /^https?/,
  },
  cast: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Cast',
  },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
