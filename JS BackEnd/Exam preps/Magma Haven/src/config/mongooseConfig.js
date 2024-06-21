const mongoose = require('mongoose');
const { CONNECTIONSTRING } = require('../constants');

async function dataBaseConfig() {
  try {
    await mongoose.connect(CONNECTIONSTRING);
    console.log('Database Connected!');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}
module.exports = dataBaseConfig;
