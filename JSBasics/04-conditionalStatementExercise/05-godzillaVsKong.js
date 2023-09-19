function godzillaVsKong(input) {
  let budgetFilm = Number(input[0]);
  let numStatist = Number(input[1]);
  let clothesPerStatist = Number(input[2]);
  let decorPrice = 0.1 * budgetFilm;
  let clothesPrice = numStatist * clothesPerStatist;
  if (numStatist >= 150) {
    clothesPrice -= clothesPrice * 0.1;
  }
  let sumOfAll = decorPrice + clothesPrice;
  if (sumOfAll <= budgetFilm) {
    let moneyLeft = budgetFilm - sumOfAll;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  } else {
    let moneyNeeded = sumOfAll - budgetFilm;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  }
}
godzillaVsKong(["15437.62", "186", "57.99"]);
