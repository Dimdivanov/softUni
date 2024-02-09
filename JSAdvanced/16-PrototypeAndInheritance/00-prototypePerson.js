function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
Person.prototype.nationality = 'Bulgarian';
let myPerson = new Person('Dimitar', 'Ivanov', 32);
console.log(myPerson.nationality);
console.log(myPerson);
console.log(Person.prototype.nationality);

Person.prototype.nationality = 'Italian';

//взимаме прототипа на новосъздадения обект
console.log(Person.prototype.nationality);
