function convert(firstName, lastName, hairColor) {
  let person = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };

  let converted = JSON.stringify(person);
  console.log(converted);
}
convert('George', 'Jones', 'Brown');
