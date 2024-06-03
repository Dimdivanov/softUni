const mongoose = require('mongoose');

// we can add an array or {}
//правим един единствен schema накрая с цялото инфо обекта масиви и т.н.
//care new class declaration 
const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
  houseNumber: String,
});
const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  breed: String,
  tricks: [String],
  address: {
    type: addressSchema,
  },
});
//can attach methods to the schema
// catSchema.method('gree', function()) - is also viable
catSchema.methods.greet = function () {
  console.log(`Hello I\'m ${this.name}`);
};
//creating a getter / setter which will not be displayed in the db
catSchema.virtual('infoCat').get(function () {
  return `My name is ${this.name} and I'm ${this.breed} and I can do ${this.tricks}`;
});

//create model
const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
