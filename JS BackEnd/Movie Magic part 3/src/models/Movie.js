const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, 'Title must be at least 5 characters long.'],
    match: [/[a-zA-Z0-9\s]+/, 'Title can only contain letters, digits, and spaces.'],
  },
  genre: {
    type: String,
    required: true,
    minLength: [5, 'Genre must be at least 5 characters long.'],
    match: [/[a-zA-Z0-9\s]+/, 'Genre can only contain letters, digits, and spaces.'],
  },
  director: {
    type: String,
    required: true,
    minLength: [5, "Director's name must be at least 5 characters long."],
    match: [/[a-zA-Z0-9\s]+/, "Director's name can only contain letters, digits, and spaces."],
  },
  year: {
    type: Number,
    required: true,
    min: [1900, 'Cannot be before {VALUE}'],
    max: [2024, 'Cannot be after {VALUE}'],
  },
  rating: {
    type: Number,
    required: true,
    min: [1, "Rating can't be below {VALUE} stars"],
    max: [5, "Rating can't be above {VALUE} stars"],
  },
  description: {
    type: String,
    required: true,
    minLength: [1, 'Description must be minimum {VALUE} characters long.'],
    maxLength: [200, 'Description must be maximum {VALUE} characters long.'],
    match: [/[a-zA-Z0-9\s]+/, 'Description can only contain letters, digits, and spaces.'],
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\//, 'Image URL must refer to a valid picture.'],
  },
  cast: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cast',
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
