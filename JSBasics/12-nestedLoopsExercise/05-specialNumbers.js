function specialNumbers(input) {
  let n = Number(input[0]);

  let result = '';

  for (let specialNum = 1111; specialNum <= 9999; specialNum++) {
    let currentNum = specialNum.toString();

    let isSpecial = true;

    for (let divider = 0; divider < currentNum.length; divider++) {
      let currDigit = Number(currentNum[divider]);

      if (n % currDigit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      result += currentNum + ' ';
    }
  }
  console.log(result);
}
specialNumbers(['3']);
