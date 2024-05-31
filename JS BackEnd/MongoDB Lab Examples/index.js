const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function connectDb() {
  await mongoose.connect('mongodb://127.0.0.1:27017/db');
  console.log('Db connected successfully');
  const cats = await Cat.find();
  // cats.forEach((cat) => cat.greet());

  //==creating a new data in the database / save
  // const newCat = new Cat({
  //   name: 'Alex',
  //   age: 20,
  //   breed: 'Orange Taby',
  // });
  // await newCat.save();
  //saveign ^

  //== adding tricks in the array
  cats[0].tricks.push('Back flip');
  cats[1].tricks.push('Front flip');
  console.log(cats);
  // cats[0].save();
  cats.forEach((cat) => console.log(cat.infoCat));
}

connectDb();
