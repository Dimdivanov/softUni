const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: [/[a-zA-Z0-9\s]+/],
  },
  age: {
    type: Number,
    required: true,
    min: [1, 'Age should be more than {VALUE} years old'],
    max: [120, 'Age should be less than {VALUE} years old'],
  },
  born: {
    type: String,
    required: true,
    match: [/[a-zA-Z0-9\s]+/],
  },
  nameInMovie: {
    type: String,
    required: true,
  },
  castImage: {
    type: String,
    required: true,
    match: /^https?:\/\//,
  },
  movie: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;
