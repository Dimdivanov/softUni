function smallShop(input) {
  let product = input[0];
  let town = input[1];
  let quant = input[2];
  let money = 0;

  switch (town) {
    case 'Sofia':
      switch (product) {
        case 'coffee':
          money = quant * 0.5;
          break;
        case 'water':
          money = quant * 0.8;
          break;
        case 'beer':
          money = quant * 1.2;
          break;
        case 'sweets':
          money = quant * 1.45;
          break;
        case 'peanuts':
          money = quant * 1.6;
          break;
      }
      break;
    case 'Plovdiv':
      switch (product) {
        case 'coffee':
          money = quant * 0.4;
          break;
        case 'water':
          money = quant * 0.7;
          break;
        case 'beer':
          money = quant * 1.15;
          break;
        case 'sweets':
          money = quant * 1.3;
          break;
        case 'peanuts':
          money = quant * 1.5;
          break;
      }
      break;
    case 'Varna':
      switch (product) {
        case 'coffee':
          money = quant * 0.45;
          break;
        case 'water':
          money = quant * 0.7;
          break;
        case 'beer':
          money = quant * 1.1;
          break;
        case 'sweets':
          money = quant * 1.35;
          break;
        case 'peanuts':
          money = quant * 1.55;
          break;
      }
      break;
    default:
      break;
  }
  console.log(money);
}
smallShop(['coffee', 'Varna', '2']);
