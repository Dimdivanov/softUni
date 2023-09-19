function club(input) {
  let index = 0;

  let priceTarget = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let priceCalculated = 0;

  while (command !== 'Party!' && priceCalculated === priceTarget) {
    let coktail = command;
    let coktailLetters = Number(coktail.length);

    let numOfCoktails = Number(input[index]);
    index++;

    priceCalculated = numOfCoktails * coktailLetters;

    if (priceCalculated % 2 === 1) {
      priceCalculated *= 0.75;
    }

    command = input[index];
    index++;
  }

  if (command === 'Party!') {
    let moneyNeeded = priceTarget - priceCalculated;
    console.log(`We need ${moneyNeeded} leva more.`);
  } else {
    console.log('Target acquired.');
  }
  let income = priceTarget - priceCalculated;
  console.log(`Club income - ${income} leva`);
}
club(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);
