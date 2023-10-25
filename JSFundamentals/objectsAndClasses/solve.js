function solve(firstName, lastName, age) {
  let object = {
    lastName,
    age,
  };

  object.firstName = firstName;

  console.log(object);
}
solve('Peter', 'Pan', '20');
