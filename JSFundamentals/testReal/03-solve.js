function solve(arr) {
  let mealsCollection = {};
  let unlikedMeals = 0;

  let command = arr.shift();
  while (command != 'Stop') {
    let [action, name, food] = command.split('-');

    if (action == 'Like') {
      if (name in mealsCollection) {
        if (!mealsCollection[name].includes(food)) {
          mealsCollection[name].push(food);
        }
      } else {
        mealsCollection[name] = [food];
      }
    } else if (action == 'Dislike') {
      if (name in mealsCollection) {
        if (!mealsCollection[name].includes(food)) {
          console.log(
            `${name} doesn't have the ${food} in his/her collection.`
          );
        } else {
          unlikedMeals++;
          console.log(`${name} doesn't like the ${food}.`);
          mealsCollection[name] = mealsCollection[name].filter(
            (item) => item !== food
          ); //delete food from the array
        }
      } else {
        console.log(`${name} is not at the party.`);
      }
    }

    command = arr.shift();
  }
  let entries = Object.entries(mealsCollection);
  for (let [name, dish] of entries) {
    console.log(`${name}: ${dish.join(', ')}`);
  }
  console.log(`Unliked meals: ${unlikedMeals}`);
}

// solve([
//   'Like-Krisi-shrimps',
//   'Dislike-Vili-carp',
//   'Dislike-Krisi-salad',
//   'Stop',
// ]);

solve(['Like-Katy-fish', 'Dislike-Katy-fish', 'Stop']);
