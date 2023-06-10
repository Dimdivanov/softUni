function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fisherCount = Number(input[2]);

  let boatPrice = 0;

  switch (season) {
    case 'Spring':
      boatPrice = 3000;
      break;
    case 'Summer':
      boatPrice = 4200;
      break;
    case 'Autumn':
      boatPrice = 4200;
      break;
    case 'Winter':
      boatPrice = 2600;
      break;
  }
  if (season !== 'Autumn' && fisherCount % 2 == 0) {
    boatPrice = boatPrice - boatPrice * 0.05;
  }
  if (fisherCount <= 6) {
    boatPrice *= 0.9;
  } else if (fisherCount >= 7 && fisherCount <= 11) {
    boatPrice *= 0.85;
  } else if (fisherCount >= 12) {
    boatPrice *= 0.75;
  }

  if (budget >= boatPrice) {
    let moneyLeft = budget - boatPrice;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = boatPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishingBoat(['3000', 'Summer', '11']);
