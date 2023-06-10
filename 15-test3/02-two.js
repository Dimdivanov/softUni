function addBags(input) {
  let luggagePrice = Number(input[0]);
  let bagWeight = Number(input[1]);
  let daysToTrip = Number(input[2]);
  let numBags = Number(input[3]);

  let price = 0;

  if (bagWeight > 20) {
    price += luggagePrice;
  } else if (bagWeight >= 10 && bagWeight <= 20) {
    price += luggagePrice / 2;
  } else if (bagWeight <= 10) {
    price += (luggagePrice * 20) / 100;
  }

  if (daysToTrip > 30) {
    price += price * 0.1;
  } else if (daysToTrip >= 7 && daysToTrip <= 30) {
    price += price * 0.15;
  } else if (daysToTrip < 7) {
    price += price * 0.4;
  }

  let finalPrice = price * numBags;
  console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}
addBags(['63.80', '23', '3', '1']);
