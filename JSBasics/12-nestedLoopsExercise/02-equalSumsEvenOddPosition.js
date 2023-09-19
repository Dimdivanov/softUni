function equalSums(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);

  let result = '';

  for (let currNum = firstNum; currNum <= secondNum; currNum++) {
    let oddPositionNum = 0;
    let evenPositionNum = 0;

    let currNumAsString = currNum.toString();

    for (let i = 0; i < currNumAsString.length; i++) {
      let currDigit = Number(currNumAsString[i]);
      let position = i + 1;

      if (position % 2 === 0) {
        evenPositionNum += currDigit;
      } else {
        oddPositionNum += currDigit;
      }
    }

    if (oddPositionNum === evenPositionNum) {
      result += currNumAsString + ' ';
    }
  }
  console.log(result);
}
equalSums(['10001', '10050']);
