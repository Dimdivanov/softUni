function employees(arr) {
  for (let name of arr) {
    let employee = { name: name, personalNum: name.length };
    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNum}`
    );
  }
}
employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
