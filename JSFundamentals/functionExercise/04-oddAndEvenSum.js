function oddAndEvenSum(params) {
  let numAsString = params.toString();
  let odd = 0;
  let even = 0;

  takeNumbers(numAsString);

  console.log(`Odd sum = ${odd}, Even sum = ${even}`);

  function takeNumbers(numAsString) {
    for (let el of numAsString) {
      let curElement = Number(el);

      if (curElement % 2 === 0) {
        even += curElement;
      } else {
        odd += curElement;
      }
    }
    return numAsString;
  }
}
oddAndEvenSum(1000435);
