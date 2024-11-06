"use strict";
let id = 5;
let company = 'My company name';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
let array = [1, true, 'hey'];
let person = [1, 'Mitaka', true];
let employee;
employee = [
    [1, 'Mitaka'],
    [2, 'Pesho'],
    [3, 'Gosho'],
];
let age = 22;
age = '22';
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 1] = "Up";
    Directions1[Directions1["Down"] = 2] = "Down";
    Directions1[Directions1["Left"] = 3] = "Left";
    Directions1[Directions1["Right"] = 4] = "Right";
})(Directions1 || (Directions1 = {}));
console.log(Directions1.Up);
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "Up";
    Directions2["Down"] = "Down";
    Directions2["Left"] = "Left";
    Directions2["Right"] = "Right";
})(Directions2 || (Directions2 = {}));
console.log(Directions2.Up);
const userType = {
    id: 1,
    name: 'John',
};
const user = {
    name: 'Hayes',
    id: 0,
};
let cid = 1;
let customerId = cid;
let customerId2 = cid;
const user1 = {
    id: 1,
    name: 'Peter',
};
const addNum1 = (x, y) => x + y;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person('Brad', 3);
class Employee extends Person {
    constructor(name, id, position) {
        super(name, id);
        this.position = position;
    }
}
const emp = new Employee('Ivan', 32, 'Lead Dev');
console.log(emp.position);
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    catMeow() {
        return `${this.name} meows for attention`;
    }
}
const cat1 = new Cat('Meowricio', 20);
class Mashka extends Cat {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    farts() {
        return `${this.breed} farts a lot`;
    }
}
const breedMashka = new Mashka('Mashka', 30, 'farty');
console.log(breedMashka);
