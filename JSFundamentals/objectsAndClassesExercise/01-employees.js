function employees(arr) {
  for (let employeeName of arr) {
    let employee = { name: employeeName, personalNumber: employeeName.length };
    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
    );
  }
}
employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
