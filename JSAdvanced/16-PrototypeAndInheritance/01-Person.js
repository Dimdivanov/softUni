function createPerson(firstName, lastName) {
  const person = {
    firstName,
    lastName,
  };
  Object.defineProperty(person, 'fullName', {
    enumerable: true,
    configurable: true,
    get() {
      return `${person.firstName} ${person.lastName}`;
    },
    set(value) {
      [person.firstName, person.lastName] = value.split(' ');
    },
  });
  return person;
}
let person = createPerson('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = 'George';
console.log(person.fullName); //George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName); //George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
