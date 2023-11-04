function addAndSubtract(num1, num2, num3) {
  let sum1 = num1 + num2;

  subtract(sum1, num3);

  function subtract(a, b) {
    let sub = a - b;
    console.log(sub);
  }
}
addAndSubtract(23, 6, 10);
