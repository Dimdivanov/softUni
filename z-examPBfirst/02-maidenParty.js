function maidenParty(input) {
  let priceParty = Number(input[0]);
  let loveLetterNum = Number(input[1]);
  let rosesNum = Number(input[2]);
  let keyChainNum = Number(input[3]);
  let picsNum = Number(input[4]);
  let luckyNum = Number(input[5]);

  let loveLetterPrice = loveLetterNum * 0.6;
  let rosePrice = rosesNum * 7.2;
  let keyChainPrice = keyChainNum * 3.6;
  let picsPrice = picsNum * 18.2;
  let luckyPrice = luckyNum * 22;

  let priceCalculated =
    loveLetterPrice + rosePrice + keyChainPrice + picsPrice + luckyPrice;

  let numberOfArtic =
    loveLetterNum + rosesNum + keyChainNum + picsNum + luckyNum;

  if (numberOfArtic >= 25) {
    priceCalculated -= priceCalculated * 0.35;
  }

  let priceAfterHosting = priceCalculated - priceCalculated * 0.1;

  if (priceAfterHosting >= priceParty) {
    let moneyLeft = priceAfterHosting - priceParty;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    let moneyNeeded = priceParty - priceAfterHosting;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
  }
}
maidenParty(['320', '8', '2', '5', '5', '1']);
