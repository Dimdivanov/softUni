//literal
const person = {
  name: 'Peter',
  age: 32,
};
// output = {value: 'Peter', writable: true, enumerable: true, configurable: true};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

//define the property
Object.defineProperty(person, 'name', {
  value: 'Peter',
  writable: false, // makes the value immutable
  enumerable: true, //if false - when iterating the KEY wont be visible (without name)
  configurable: true, //if false - cannot delete the key
});
person.name = 'John';
console.log(person);
