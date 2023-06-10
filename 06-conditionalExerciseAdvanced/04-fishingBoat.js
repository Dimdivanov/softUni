function fishingBoat(input) {
  let budgetGroup = Number(input[0]);
  let season = input[1];
  let groupNum = Number(input[2]);

  let rental = 0;
  switch (season) {
    case 'Spring':
      rental = 3000;
      break;
    case 'Summer':
      rental = 4200;
      break;
    case 'Autumn':
      rental = 4200;
      break;
    case 'Winter':
      rental = 2600;
      break;
  }

  if (groupNum % 2 === 0 && season !== 'Autumn') {
    rental = rental - rental * 0.05;
  }

  if (groupNum <= 6) {
    rental *= 0.9;
  } else if (groupNum >= 7 && groupNum <= 11) {
    rental *= 0.85;
  } else if (groupNum >= 12) {
    rental *= 0.75;
  }

  if (budgetGroup >= rental) {
    let moneyLeft = budgetGroup - rental;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = rental - budgetGroup;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}
fishingBoat(['2000', 'Winter', '13']);
