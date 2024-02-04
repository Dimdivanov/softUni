class Person {
  //static property - свойства
  static counter = 0;

  constructor(name, age, email) {
    Person.counter++;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.name} ${this.age} ${this.email}`;
  }

  //create a STATIC METHOD that applies only on the class
  static printCount() {
    //we access the static counter with this.counter
    console.log(`${this.counter} instances have been created`);
  }
  //we can call another method with this.method()
  static greet() {
    console.log('Say hello!');
    this.bot();
  }
  static bot() {
    console.log('Bot');
  }
}
Person.printCount();
let newPerson = new Person('John Smith', 32, 'john@gmail.com');
let newPerson1 = new Person('Anne Kar', 32, 'anne@gmail.com');
let newPerson2 = new Person('Peter Jacobson', 32, 'peter@gmail.com');

Person.greet();
Person.printCount();
