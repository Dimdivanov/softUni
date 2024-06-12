const mongoose = require('mongoose');

const CONNECTIONSTRING = 'mongodb://localhost:27017/movie-magic';
const PORT = 3000;

async function configDataBase() {
  await mongoose.connect(CONNECTIONSTRING);
  console.log('Database connected!');
}

module.exports = { configDataBase, PORT };
