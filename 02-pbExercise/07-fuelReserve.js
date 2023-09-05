function fuelTank(input) {
  let fuelType = input[0];
  let liters = Number(input[1]);
  let card = input[2];

  let gasoline = 2.22;
  let diesel = 2.33;
  let gas = 0.93;

  let fuelPrice = 0;

  switch (fuelType) {
    case 'Gasoline':
      fuelPrice = liters * gasoline;
      if (card === 'Yes') {
        fuelPrice -= 0.18 * liters;
      }
      if (liters >= 20 && liters <= 25) {
        fuelPrice -= fuelPrice * 0.08;
      } else {
        fuelPrice *= 0.9;
      }

      break;

    case 'Diesel':
      fuelPrice = liters * diesel;
      if (card === 'Yes') {
        fuelPrice -= 0.12 * liters;
      }
      if (liters >= 20 && liters <= 25) {
        fuelPrice -= fuelPrice * 0.08;
      } else if (liters > 25) {
        fuelPrice *= 0.9;
      }
      break;

    case 'Gas':
      fuelPrice = liters * gas;
      if (card === 'Yes') {
        fuelPrice -= 0.08 * liters;
      }
      if (liters >= 20 && liters <= 25) {
        fuelPrice -= fuelPrice * 0.08;
      } else {
        fuelPrice *= 0.9;
      }
      break;

    default:
      console.log('Wrong input');
      break;
  }
  console.log(`${fuelPrice.toFixed(2)} lv.`);
}
fuelTank(['Gasoline', '25', 'No']);
