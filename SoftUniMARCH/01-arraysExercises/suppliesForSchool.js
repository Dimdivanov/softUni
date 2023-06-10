function suppliesForSchool(input) {
  let penNumber = Number(input[0]);
  let markerNumber = Number(input[1]);
  let cleanerNumber = Number(input[2]);
  let discount = Number(input[3]) / 100;

  let penPrice = penNumber * 5.8;
  let markerPrice = markerNumber * 7.2;
  let cleanerPrice = cleanerNumber * 1.2;
  let sumMaterials = penPrice + markerPrice + cleanerPrice;

  let discountPrice = sumMaterials - sumMaterials * discount;
  console.log(discountPrice);
}

suppliesForSchool(['2 ', '3 ', '4 ', '25 ']);
suppliesForSchool(['4 ', '2 ', '5 ', '13 ']);
