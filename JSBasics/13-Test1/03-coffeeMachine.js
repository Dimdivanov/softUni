function coffeeMachine(data) {
  let drinkType = data[0];
  let sugar = data[1];
  let drinksCount = Number(data[2]);
  let drinkPrice = 0;

  switch (drinkType) {
    case 'Espresso':
      if (sugar === 'Without') {
        drinkPrice = drinksCount * 0.9 * 0.65;
      } else if (sugar === 'Normal') {
        drinkPrice = drinksCount * 1.0;
      } else if (sugar === 'Extra') {
        drinkPrice = drinksCount * 1.2;
      }

      break;
    case 'Cappuccino':
      if (sugar === 'Without') {
        drinkPrice = drinksCount * 1.0 * 0.65;
      } else if (sugar === 'Normal') {
        drinkPrice = drinksCount * 1.2;
      } else if (sugar === 'Extra') {
        drinkPrice = drinksCount * 1.6;
      }

      break;
    case 'Tea':
      if (sugar === 'Without') {
        drinkPrice = drinksCount * 0.5 * 0.65;
      } else if (sugar === 'Normal') {
        drinkPrice = drinksCount * 0.6;
      } else if (sugar === 'Extra') {
        drinkPrice = drinksCount * 0.7;
      }

      break;
    default:
      break;
  }

  if (drinkType === 'Espresso' && drinksCount >= 5) {
    drinkPrice = drinkPrice * 0.75;
  }

  if (drinkPrice > 15) {
    drinkPrice = drinkPrice * 0.8;
  }

  console.log(
    `You bought ${drinksCount} cups of ${drinkType} for ${drinkPrice.toFixed(
      2
    )} lv.`
  );
}
coffeeMachine(['Espresso', 'Without', '10']);
