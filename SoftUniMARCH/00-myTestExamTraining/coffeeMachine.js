function coffeeMachine(input) {
  let drink = input[0];
  let sugar = input[1];
  let numberOfDrinks = Number(input[2]);

  let price = 0;
  let espressoDiscount = numberOfDrinks * 0.9 * 0.65 * 0.25;

  if (drink === 'Espresso') {
    if (sugar === 'Without') {
      price = numberOfDrinks * 0.9 * 0.65;
    } else if (sugar === 'Normal') {
      price = numberOfDrinks * 1;
    } else {
      price = numberOfDrinks * 1.2;
    }

    if (drink === 'Espresso' && numberOfDrinks >= 5) {
      price -= espressoDiscount;
    }
  } else if (drink === 'Cappuccino') {
    if (sugar === 'Without') {
      price = numberOfDrinks * 1 * 0.65;
    } else if (sugar === 'Normal') {
      price = numberOfDrinks * 1.2;
    } else {
      price = numberOfDrinks * 1.6;
    }
  } else {
    if (sugar === 'Without') {
      price = numberOfDrinks * 0.5 * 0.65;
    } else if (sugar === 'Normal') {
      price = numberOfDrinks * 0.6;
    } else {
      price = numberOfDrinks * 0.7;
    }
  }

  if (price >= 15) {
    price = price * 0.8;
  }

  console.log(
    `You bought ${numberOfDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`
  );
}

coffeeMachine(['Espresso', 'Without', '10']);
