function energyBooster(input) {
  let fruit = input[0];
  let size = input[1];
  let orderedNum = Number(input[2]);

  let price = 0;
  switch (fruit) {
    case 'Watermelon':
      if (size === 'small') {
        price = 2 * 56 * orderedNum;
      } else {
        price = 5 * 28.7 * orderedNum;
      }
      break;
    case 'Mango':
      if (size === 'small') {
        price = 2 * 36.66 * orderedNum;
      } else {
        price = 5 * 19.6 * orderedNum;
      }
      break;
    case 'Pineapple':
      if (size === 'small') {
        price = 2 * 42.1 * orderedNum;
      } else {
        price = 5 * 24.8 * orderedNum;
      }
      break;
    case 'Raspberry':
      if (size === 'small') {
        price = 2 * 20 * orderedNum;
      } else {
        price = 5 * 15.2 * orderedNum;
      }
      break;
  }
  if (price >= 400 && price <= 1000) {
    price *= 0.85;
  } else if (price > 1000) {
    price *= 0.5;
  }
  console.log(`${price.toFixed(2)} lv.`);
}
energyBooster(['Pineapple', 'small', '1']);
