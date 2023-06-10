function sumOfNum(input) {
  let num = input[0];

  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let numInNum = Number(num[i]);
    sum += numInNum;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNum(['123456789']);
