function companyUsers(arr) {
  let companyObject = {};

  for (let companyEmployee of arr) {
    let [company, employeeId] = companyEmployee.split(' -> ');

    if (company in companyObject) {
      if (!companyObject[company].includes(employeeId)) {
        //ако все още не е вътре в масива на компанията
        companyObject[company].push(employeeId); //добави елемента в масива на фирмата
      }
    } else {
      companyObject[company] = [employeeId];
    }
  }
  let entries = Object.entries(companyObject).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  console.log(companyObject);
  for (let [company, ids] of entries) {
    console.log(`${company}`);
    ids.forEach((ids) => console.log(`-- ${ids}`));
  }
}
companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345',
]);
