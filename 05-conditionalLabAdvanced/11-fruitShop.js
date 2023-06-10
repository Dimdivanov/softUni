function fruitShop(input) {
  let fruit = input[0];
  let dayOfWeek = input[1];
  let quantity = Number(input[2]);

  let price = 0;
  switch (dayOfWeek) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      switch (fruit) {
        case 'banana':
          price = 2.5 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'apple':
          price = 1.2 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'orange':
          price = 0.85 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'grapefruit':
          price = 1.45 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'kiwi':
          price = 2.7 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'pineapple':
          price = 5.5 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'grapes':
          price = 3.85 * quantity;
          console.log(price.toFixed(2));
          break;
        default:
          console.log('error');
          break;
      }
      break;
    case 'Saturday':
    case 'Sunday':
      switch (fruit) {
        case 'banana':
          price = 2.7 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'apple':
          price = 1.25 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'orange':
          price = 0.9 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'grapefruit':
          price = 1.6 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'kiwi':
          price = 3 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'pineapple':
          price = 5.6 * quantity;
          console.log(price.toFixed(2));
          break;
        case 'grapes':
          price = 4.2 * quantity;
          console.log(price.toFixed(2));
          break;
        default:
          console.log('error');
          break;
      }
      break;
    default:
      console.log('error');
      break;
  }
}
fruitShop(['apple', 'Tuesday', '2']);
