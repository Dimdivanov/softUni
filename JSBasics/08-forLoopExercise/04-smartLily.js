function smartLily(input) {
  let age = Number(input[0]);
  let sumWasher = Number(input[1]);
  let toyPrice = Number(input[2]);

  let giftedMoney = 10;
  let totalSumSaved = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      totalSumSaved += giftedMoney - 1;
      giftedMoney += 10;
    } else {
      totalSumSaved += toyPrice;
    }
  }
  if (totalSumSaved >= sumWasher) {
    let moneyLeft = totalSumSaved - sumWasher;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else if (totalSumSaved < sumWasher) {
    let moneyNeeded = sumWasher - totalSumSaved;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
smartLily(['10', '170.00', '6']);
