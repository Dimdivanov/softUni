function solve(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  console.log(person.age);
  console.log(person['age']);

  return person;
}
solve('Peter', 'Pan', '20');
