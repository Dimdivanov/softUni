const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const connectionString = 'mongodb://localhost:27017/movie-magic';

async function configDataBase() {
  await mongoose.connect(connectionString);
  console.log('Database connected!');
  const movies = await Movie.find();

  const justAnotherMovie = await Movie.create({
    title: 'Fall Guy',
    genre: 'Comedy',
    director: 'David Leitch',
    year: 2024,
    rating: 7,
    description:
      'After leaving the business one year earlier, battle-scarred stuntman Colt Seavers springs back into action when the star of a big studio movie suddenly disappears. As the mystery surrounding the missing actor deepens, Colt soon finds himself ensnared in a sinister plot that pushes him to the edge of a fall more dangerous than any stunt.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/The_Fall_Guy_%282024%29_poster.jpg/220px-The_Fall_Guy_%282024%29_poster.jpg',
  });
  
  await mongoose.disconnect();
}

module.exports = { configDataBase };
