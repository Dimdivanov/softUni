function sumOfNumbers(input) {
  let num = input[0];
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let currentNumber = Number(num[i]);
    sum += currentNumber;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);
