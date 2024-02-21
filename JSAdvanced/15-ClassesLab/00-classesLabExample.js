class Person {
  //static property - свойства
  static _counter = 0;
  static _botCount = 'This is bot counter string';

  constructor(name, age, email) {
    Person._counter++;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.name} ${this.age} ${this.email}`;
  }

  //create a STATIC METHOD that applies only on the class
  static printCount() {
    console.log(`${Person._counter} instances have been created`);
  }
  //we can call another static method with 'this.method()'
  static greet() {
    console.log('Say hello!');
    this.bot();
  }
  static bot() {
    console.log('Bot');
    console.log(Person._botCount);
    console.log(this._counter);
  }
  //we can clone a person but they wont be equal
  static clone(person) {
    let result = new Person(person.name, person.age, person.email);
    return result;
  }
}

let newPerson = new Person('John Smith', 32, 'john@gmail.com');
console.log(newPerson);
let newPerson2 = new Person('Peter Jacobson', 32, 'peter@gmail.com');

Person.greet();
Person.printCount();
//clone created
let clonedPerson = Person.clone(newPerson);
console.log(clonedPerson);
