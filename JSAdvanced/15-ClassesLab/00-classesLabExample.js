class Person {
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

  static greet() {
    console.log('Say hello!');
    this.bot();
  }
  static bot() {
    console.log('Bot');
  }
}
Person.greet();
