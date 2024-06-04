const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
  houseNumber: String,
});
const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0, max: 20 }, //validating numbers
  breed: String,
  tricks: {
    type: [String], //validating strings
    enum: {
      values: ['zoomies', 'Back flip', 'New Trick', 'side flip'],
      message: 'not valid trick',
    },
  },
  address: {
    type: addressSchema,
  },
});
//Model method
//== catSchema.method('gree', function())
catSchema.methods.greet = function () {
  console.log(`Hello I\'m ${this.name}`);
};
//Model Virtual Property and creating a getter / setter which will not be displayed in the db
catSchema.virtual('infoCat').get(function () {
  return `My name is ${this.name} and I'm ${this.breed} and I can do ${this.tricks}`;
});
//creating static methods

//Property Validation
// catSchema.path('age').validate(function (value) {
//   return value.age >= 0 && value.age <= 20;
// }, 'Age should be more than 0 and less than 20 y/o!');

//create model
const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
