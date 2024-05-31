const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function connectDb() {
  await mongoose.connect('mongodb://127.0.0.1:27017/db');
  console.log('Db connected successfully');
  const cats = await Cat.find();
  console.log(cats);
}

connectDb();
