function dishwasher(input) {
  let index = 0;

  let deterBottles = Number(input[index]);
  index++;

  let dishesNum = input[index];
  index++;

  let deterInMl = deterBottles * 750;
  let loadingDishwasher = 0;

  let platesCleaned = 0;
  let saucePanCleaned = 0;

  while (dishesNum !== 'End') {
    let typeOfDish = Number(dishesNum);
    loadingDishwasher++;

    if (loadingDishwasher % 3 === 0) {
      deterInMl -= typeOfDish * 15;
      saucePanCleaned += typeOfDish;
    } else {
      deterInMl -= typeOfDish * 5;
      platesCleaned += typeOfDish;
    }

    if (deterInMl < 0) {
      break;
    }

    dishesNum = input[index];
    index++;
  }

  if (deterInMl >= 0) {
    console.log('Detergent was enough!');
    console.log(
      `${platesCleaned} dishes and ${saucePanCleaned} pots were washed.`
    );
    console.log(`Leftover detergent ${deterInMl} ml.`);
  } else {
    console.log(
      `Not enough detergent, ${Math.abs(deterInMl)} ml. more necessary!`
    );
  }
}
dishwasher(['1', '10', '15', '10', '12', '13', '30']);
