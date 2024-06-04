const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/movie-magic';

async function configDataBase() {
  await mongoose.connect(connectionString);
  console.log('Database connected!');
}

module.exports = { configDataBase };
