const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function connectDb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/db');
    console.log('Db connected successfully');

    // cat.find has all kinds of methods
    const cats = await Cat.find();

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
    //Create 2nd variant
    /*
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
    */

    //Read (extract data)
    //Cat.find({})
    //Cat.findOne({condition}, {options})
    //Cat.findbyId(id, {opts})

    //Update (modify data)
    //Cat.findByIdAndUpdate(id, {$set: {name: alabala}})
    //Cat.updateOne({filter}, {$set: {name: alabala2}})
    //Cat.updateMany({filter}, {$set: {name: alabala2}})

    //Delete (remove data)
    //Cat.findByIdAndDelete(id)
    //Cat.deleteOne
    //Cat.deleteMany

    cats.forEach((cat) => console.log(cat.infoCat));
    //mongoose Queries
    /*
    For equality / non-equality
    Cat.findOne({'lastName':'Mishi'});
    Cat.find({}).where('age').gt(7).lt(14);
    Cat.find({}).where('age').equals('1');
    For selection
    Cat.findOne({'lastName':'Kirka'}).select('name age');
    Sorting
    Cat.find({}).sor({age: 1});
    Limit & skip
    Cat.find({}).sort({age:1}).skip(1).limit(6);
    */
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectDb();
