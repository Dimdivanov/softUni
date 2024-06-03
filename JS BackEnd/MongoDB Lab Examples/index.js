const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function connectDb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/db');
    console.log('Db connected successfully');

    // cat.find has all kinds of methods
    const cats = await Cat.find();
    // cats.forEach((cat) => cat.greet());

    //==creating a new data in the database / save
    const newCat = new Cat({
      name: 'Hahoo',
      age: 1,
      breed: 'Taby',
      tricks: ['zoomies', 'side flip'],
      address: {
        city: 'Dobrich',
        street: '51',
        houseNumber: '51',
      },
    });
    await newCat.save();
    //savign ^

    //== adding tricks in the array
    // for (const cat of cats) {
    //   cat.tricks.push('New Trick');
    //   await cat.save(); // Wait for each save operation to complete
    // }

    cats.forEach((cat) => console.log(cat.infoCat));

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectDb();
