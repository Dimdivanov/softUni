function sumOfNum(input) {
  let index = 0;
  let numberMain = Number(input[index]);
  index++;

  let result = 0;

  while (result < numberMain) {
    let currentNumber = Number(input[index]);
    index++;
    result += currentNumber;
  }
  console.log(result);
}

sumOfNum(['100', '10', '20', '30', '60']);
