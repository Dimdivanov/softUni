function roadTrip(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let destination;
  let typeOfVaca;
  let moneySpend = 0;

  switch (season) {
    case 'summer':
      if (budget <= 100) {
        destination = 'Bulgaria';
        typeOfVaca = 'Camp';
        moneySpend = 0.3 * budget;
      } else if (budget >= 100 && budget <= 1000) {
        destination = 'Balkans';
        typeOfVaca = 'Camp';
        moneySpend = 0.4 * budget;
      } else {
        destination = 'Europe';
        typeOfVaca = 'Hotel';
        moneySpend = 0.9 * budget;
      }
      break;
    case 'winter':
      if (budget <= 100) {
        destination = 'Bulgaria';
        typeOfVaca = 'Hotel';
        moneySpend = 0.7 * budget;
      } else if (budget >= 100 && budget <= 1000) {
        destination = 'Balkans';
        typeOfVaca = 'Hotel';
        moneySpend = 0.8 * budget;
      } else {
        destination = 'Europe';
        typeOfVaca = 'Hotel';
        moneySpend = 0.9 * budget;
      }
      break;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${typeOfVaca} - ${moneySpend.toFixed(2)}`);
}
roadTrip(['1500', 'summer']);
