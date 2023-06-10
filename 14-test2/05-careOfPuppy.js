function careOfPuppy(input) {
  let index = 0;

  let kgFoodPurchased = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let allFoodInGrams = kgFoodPurchased * 1000;
  let sumEatenFood = 0;

  while (command !== 'Adopted') {
    let foodPerMeal = Number(command);
    sumEatenFood += foodPerMeal;

    command = input[index];
    index++;
  }

  if (sumEatenFood <= allFoodInGrams) {
    let leftFood = allFoodInGrams - sumEatenFood;
    console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
  } else {
    let neededFood = sumEatenFood - allFoodInGrams;
    console.log(
      `Food is not enough. You need ${Math.abs(neededFood)} grams more.`
    );
  }
}
careOfPuppy(['4', '130', '345', '400', '180', '230', '120', 'Adopted']);
