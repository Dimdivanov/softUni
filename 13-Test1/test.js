function shop(input) {
  let strawberyPrice = Number(input[0]);
  let bananasKg = Number(input[1]);
  let orangesKg = Number(input[2]);
  let maliniKg = Number(input[3]);
  let strawberyKg = Number(input[4]);

  let malini = strawberyPrice / 2;
  let orangesPrice = malini - malini * 0.4;
  let bananasPrice = malini - malini * 0.8;
  let maliniTotal = maliniKg * malini;
  let orangesTotal = orangesKg * orangesPrice;
  let bananaTotal = bananasKg * bananasPrice;
  let strawberyTotal = strawberyKg * strawberyPrice;

  let totalPrice = maliniTotal + orangesTotal + bananaTotal + strawberyTotal;

  console.log(totalPrice.toFixed(2));
}
shop(['48', '10', '3.3', '6.5', '1.7']);
