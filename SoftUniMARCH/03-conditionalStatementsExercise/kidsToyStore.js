function kidsToyStore(input) {
  let vacationMoney = Number(input[0]);

  let numPuzzle = Number(input[1]);
  let numDoll = Number(input[2]);
  let numTeddy = Number(input[3]);
  let numMinions = Number(input[4]);
  let numTrucks = Number(input[5]);

  let sumOrders =
    numPuzzle * 2.6 +
    numDoll * 3 +
    numTeddy * 4.1 +
    numMinions * 8.2 +
    numTrucks * 2;
  let numberOfToys = numPuzzle + numDoll + numTeddy + numMinions + numTrucks;

  let discount = 0.0;
  if (numberOfToys >= 50) {
    discount = sumOrders * 0.25;
  }

  let priceAfterDiscount = sumOrders - discount;
  let sumRent = priceAfterDiscount * 0.1;
  let profit = priceAfterDiscount - sumRent;

  if (profit >= vacationMoney) {
    let moneyLeft = (profit - vacationMoney).toFixed(2);
    console.log(`Yes! ${moneyLeft} lv left.`);
  } else {
    let notEnough = (vacationMoney - profit).toFixed(2);
    console.log(`Not enough money! ${notEnough} lv needed.`);
  }
}

kidsToyStore(["320", "8", "2", "5", "5", "1"]);
