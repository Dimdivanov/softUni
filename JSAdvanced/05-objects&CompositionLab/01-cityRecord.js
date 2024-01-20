function cityRecord(name, population, treasury) {
  let record = {};
  record.name = name;
  record.population = population;
  record.treasury = treasury;
  return record;
}
console.log(cityRecord('Tortuga', 7000, 15000));
