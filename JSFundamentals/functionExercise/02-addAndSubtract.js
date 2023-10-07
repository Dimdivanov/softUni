function addAndSubtract(num1, num2, num3) {
  let sum1 = num1 + num2;
  let result = subtract(sum1, num3);
  console.log(result);
  function subtract(a, b) {
    let sub = a - b;
    return sub;
  }
}
addAndSubtract(23, 6, 10);
