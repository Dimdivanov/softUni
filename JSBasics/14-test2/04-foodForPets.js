function foodForPets(input) {
  let numOfDays = Number(input[0]);
  let foodQuantity = Number(input[1]);

  let sumOfFood = 0;
  let daysCount = 0;
  let biskits = 0;

  let dogFoodGram = 0;
  let catFoodGram = 0;

  for (let i = 2; i <= numOfDays * 2; i += 2) {
    let dogFoodEaten = Number(input[i]);
    let catFoodEaten = Number(input[i + 1]);

    sumOfFood += dogFoodEaten + catFoodEaten;
    daysCount++;

    if (daysCount % 3 === 0) {
      let currentBiskits = (dogFoodEaten + catFoodEaten) * 0.1;
      biskits += currentBiskits;
    }

    dogFoodGram += dogFoodEaten;
    catFoodGram += catFoodEaten;
  }

  let percentFoodEaten = (sumOfFood / foodQuantity) * 100;
  let pecentDogFood = (dogFoodGram / sumOfFood) * 100;
  let pecentCatFood = (catFoodGram / sumOfFood) * 100;

  console.log(`Total eaten biscuits: ${Math.round(biskits)}gr.`);
  console.log(`${percentFoodEaten.toFixed(2)}% of the food has been eaten.`);
  console.log(`${pecentDogFood.toFixed(2)}% eaten from the dog.`);
  console.log(`${pecentCatFood.toFixed(2)}% eaten from the cat.`);
}
foodForPets(['3', '500', '100', '30', '110', '25', '120', '35']);
