function oddAndEvenSum(params) {
  let numAsString = params.toString();

  takeNumbers(numAsString);

  function takeNumbers(numAsString) {
    let odd = 0;
    let even = 0;

    for (let el of numAsString) {
      let curElement = Number(el);

      if (curElement % 2 === 0) {
        even += curElement;
      } else {
        odd += curElement;
      }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
  }
}
oddAndEvenSum(1000435);
