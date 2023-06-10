function swimmingPool(input) {
  let numPeople = Number(input[0]);
  let taxFee = Number(input[1]);
  let bed = Number(input[2]);
  let umbrella = Number(input[3]);

  let enterTaxAll = numPeople * taxFee;
  let bedPeople = Math.ceil(numPeople - numPeople * 0.25);
  let umbrellaPeople = Math.ceil(numPeople - numPeople * 0.5);

  let bedTax = bedPeople * bed;
  let umbrellaTax = umbrellaPeople * umbrella;

  let allSum = enterTaxAll + bedTax + umbrellaTax;
  console.log(`${allSum.toFixed(2)} lv.`);
}

swimmingPool(['50', '6', '8', '4']);
