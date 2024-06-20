const mongoose = require('mongoose');

//change name of db here
const CONNECTIONSTRING = 'mongodb://localhost:27017/course-book';

async function dataBaseConfig() {
  try {
    await mongoose.connect(CONNECTIONSTRING);
    console.log('Database Connected!');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}
module.exports = dataBaseConfig;
