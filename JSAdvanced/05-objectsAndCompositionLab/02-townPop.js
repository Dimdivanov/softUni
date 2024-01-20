function townPop(arr) {
  let result = {};
  for (let city of arr) {
    let [cityName, pop] = city.split(' <-> ');
    pop = Number(pop);

    if (cityName in result) {
      result[cityName] += pop;
    } else {
      result[cityName] = pop;
    }
  }
  let entries = Object.entries(result);
  for (let [town, pops] of entries) {
    console.log(`${town} : ${pops}`);
  }
}

townPop([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
]);
