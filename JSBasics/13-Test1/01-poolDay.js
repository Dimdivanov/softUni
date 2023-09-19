function poolDay(input) {
  let numPeople = Number(input[0]);
  let entryTax = Number(input[1]);
  let sunBedPrice = Number(input[2]);
  let umbrellaPrice = Number(input[3]);

  let sumEnter = numPeople * entryTax;
  let sunBeds = Math.round(numPeople * 0.75) * sunBedPrice;
  let umbrellas = Math.round(numPeople * 0.5) * umbrellaPrice;

  let allSum = sumEnter + sunBeds + umbrellas;
  console.log(allSum.toFixed(2));
}
poolDay(['100', '8', '6', '4']);
