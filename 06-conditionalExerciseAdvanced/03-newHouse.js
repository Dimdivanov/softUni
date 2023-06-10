function newHome(input) {
  let typeFlower = input[0];
  let numFlower = Number(input[1]);
  let budget = Number(input[2]);

  let flowerPrice = 0;

  switch (typeFlower) {
    case 'Roses':
      if (numFlower > 80) {
        flowerPrice = numFlower * 5 * 0.9;
      } else {
        flowerPrice = numFlower * 5;
      }
      break;
    case 'Dahlias':
      if (numFlower > 90) {
        flowerPrice = numFlower * 3.8 * 0.85;
      } else {
        flowerPrice = numFlower * 3.8;
      }
      break;
    case 'Tulips':
      if (numFlower > 80) {
        flowerPrice = numFlower * 2.8 * 0.85;
      } else {
        flowerPrice = numFlower * 2.8;
      }
      break;
    case 'Narcissus':
      if (numFlower < 120) {
        flowerPrice = numFlower * 3 * 1.15;
      } else {
        flowerPrice = numFlower * 3;
      }
      break;
    case 'Gladiolus':
      if (numFlower < 80) {
        flowerPrice = numFlower * 2.5 * 1.2;
      } else {
        flowerPrice = numFlower * 2.5;
      }
      break;
  }
  if (budget >= flowerPrice) {
    let moneyLeft = budget - flowerPrice;
    console.log(
      `Hey, you have a great garden with ${numFlower} ${typeFlower} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else if (budget < flowerPrice) {
    let moneyNeeded = flowerPrice - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
newHome(['Tulips', '88', '260']);
