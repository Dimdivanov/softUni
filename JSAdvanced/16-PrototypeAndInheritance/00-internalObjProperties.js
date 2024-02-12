//literal
const person = {
  name: 'Peter',
  age: 32,
};
// output = {value: 'Peter', writable: true, enumerable: true, configurable: true};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

//define the properties
Object.defineProperty(person, 'name', {
  value: 'Peter',
  writable: false, // makes the value immutable
  enumerable: true, //if false - when iterating the KEY wont be visible (without name)
  configurable: true, //if false - cannot delete the key
});
person.name = 'John'; //output doesnt change cuz writable is 'false'

//can create a  new property
Object.defineProperty(person, 'country', {
  value: 'Bulgaria',
  writable: true, //set these to true otherwise wont be visible or adjustable
  enumerable: true,
  configurable: true,
});

console.log(person);

// creating get and set - no value or writable
let country; // define in closure 2/4
Object.defineProperty(person, 'country', {
  enumerable: true,
  configurable: true,
  get() {
    return country; //return country 1/4
  },
  set(value) {
    country = value;
  },
});

console.log(person.country); //undefined yet

person.country = 'Italy'; // set country to Italy 3/4
console.log(person);
console.log(person.country); // result 4/4
