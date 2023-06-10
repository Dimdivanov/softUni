function foodDelivery(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let veganMenu = Number(input[2]);

  let priceChicken = chickenMenu * 10.35;
  let priceFish = fishMenu * 12.4;
  let priceVegan = veganMenu * 8.15;
  let sumMenu = priceChicken + priceFish + priceVegan;
  let priceDesert = 0.2 * sumMenu;

  let orderSum = sumMenu + priceDesert + 2.5;

  console.log(orderSum);
}

foodDelivery(['2 ', '4 ', '3 ']);
foodDelivery(['9 ', '2 ', '6 ']);
