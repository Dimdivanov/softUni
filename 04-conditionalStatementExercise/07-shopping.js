function shopping(input) {
  let budget = Number(input[0]);
  let videoCard = Number(input[1]);
  let processor = Number(input[2]);
  let ramMemory = Number(input[3]);

  let videoPrice = videoCard * 250;
  let processorPrice = 0.35 * videoPrice * processor;
  let ramPrice = 0.1 * videoPrice * ramMemory;

  let sumAll = videoPrice + processorPrice + ramPrice;

  if (videoCard > processor) {
    sumAll -= 0.15 * sumAll;
  }

  if (sumAll <= budget) {
    let moneyLeft = budget - sumAll;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
  } else {
    let moneyNeeded = sumAll - budget;
    console.log(
      `Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`
    );
  }
}
shopping(['920.45', '3', '1', '1']);
