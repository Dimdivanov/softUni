const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  breed: String,
});
//can attach methods to the schema
catSchema.methods.greet = function () {
  console.log(`Hello I\'m ${this.name}`);
};
//creating a getter / setter which will not be displayed in the db
catSchema.virtual('infoCat').get(function () {
  return `My name is ${this.name} and I'm ${this.breed}`;
});

//create model
const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
