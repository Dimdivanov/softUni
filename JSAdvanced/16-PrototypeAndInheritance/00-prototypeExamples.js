class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function () {
  console.log('Hello, my name is ' + this.name);
};

// Creating an instance of Person
var person1 = new Person('John', 25);
// Calling the method from the prototype
person1.sayHello(); // Output: Hello, my name is John

//example 2
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Adding a property to the Animal prototype
Animal.prototype.sound = 'Some generic sound';

// Creating an instance of Animal
var cat = new Animal('Whiskers');

// Logging the object
console.log(cat);
console.log(Object.getPrototypeOf(cat)); // Outputs: { sound: 'Some generic sound' }
