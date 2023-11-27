function pirates(array) {
  let targets = {};
  let command = array.shift();

  while (command != 'Sail') {
    let [city, population, gold] = command.split('||');
    population = Number(population);
    gold = Number(gold);
    if (city in targets) {
      targets[city].population += population;
      targets[city].gold += gold;
    } else {
      targets[city] = { population, gold }; //when object is still not created
    }

    command = array.shift();
  }

  command = array.shift();

  while (command != 'End') {
    let tokens = command.split('=>');
    let action = tokens.shift();

    if (action == 'Plunder') {
      let [city, people, gold] = tokens; //keep an eye when destructuring array
      people = Number(people);
      gold = Number(gold);

      targets[city].population -= people;
      targets[city].gold -= gold;
      console.log(
        `${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );

      if (targets[city].population <= 0 || targets[city].gold <= 0) {
        console.log(`${city} has been wiped off the map!`);
        delete targets[city];
      }
    } else if (action == 'Prosper') {
      let [city, gold] = tokens;
      gold = Number(gold);

      if (gold < 0) {
        console.log('Gold added cannot be a negative number!');
        command = array.shift();
        continue;
      }
      targets[city].gold += gold;
      console.log(
        `${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`
      );
    }
    command = array.shift();
  }
  let entries = Object.entries(targets);
  if (entries.length == 0) {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`
    );
    entries.forEach(([city, stats]) =>
      console.log(
        `${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`
      )
    );
  }
}
pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);
