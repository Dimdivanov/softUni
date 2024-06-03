const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function connectDb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/db');
    console.log('Db connected successfully');

    // cat.find has all kinds of methods
    const cats = await Cat.find();
    // cats.forEach((cat) => cat.greet());

    //CRUD
    //Create
    const justAnotherCat = await Cat.create({
      name: 'Hurikan',
      age: 1,
      breed: 'Siamese',
      tricks: ['Back flip', 'side flip'],
      address: {
        city: 'Varna',
        street: '1000',
        houseNumber: '52',
      },
    });
    //==creating a new data in the database / save
    // const newCat = new Cat({
    //   name: 'Hahoo',
    //   age: 1,
    //   breed: 'Taby',
    //   tricks: ['zoomies', 'side flip'],
    //   address: {
    //     city: 'Dobrich',
    //     street: '51',
    //     houseNumber: '51',
    //   },
    // });
    // await newCat.save();
    //savign ^

    //== adding tricks in the array
    // for (const cat of cats) {
    //   cat.tricks.push('New Trick');
    //   await cat.save(); // Wait for each save operation to complete
    // }

    //Read (extract data)
    //Cat.find({})
    //Cat.findOne({condition}, {options})
    //Cat.findbyId(id, {opts})

    //Update (modify data)
    //Cat.findByIdAndUpdate(id, {$set: {name: alabala}})
    //Cat.updateOne({filter}, {$set: {name: alabala2}})
    //Cat.updateMany({filter}, {$set: {name: alabala2}})
    cats.forEach((cat) => console.log(cat.infoCat));

    //Delete (remove data)
    //Cat.findByIdAndDelete(id)
    //Cat.deleteOne
    //Cat.deleteMany
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectDb();
