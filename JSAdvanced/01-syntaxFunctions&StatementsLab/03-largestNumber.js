function largestNum(num1, num2, num3) {
  let result = [];
  result.push(num1, num2, num3);
  result.sort((a, b) => a - b);
  console.log(`The largest number is ${result.pop()}.`);
}
largestNum(5, -3, 16);
