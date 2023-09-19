function barcodeGen(input) {
  let num1 = input[0];
  let num2 = input[1];
  let result = '';

  for (let i = num1.charAt(0); i <= num2.charAt(0); i++) {
    for (let k = num1.charAt(1); k <= num2.charAt(1); k++) {
      for (let j = num1.charAt(2); j <= num2.charAt(2); j++) {
        for (let m = num1.charAt(3); m <= num2.charAt(3); m++) {
          if (
            Number(i) % 2 !== 0 &&
            Number(k) % 2 !== 0 &&
            Number(j) % 2 !== 0 &&
            Number(m) % 2 !== 0
          ) {
            result += `${i}${k}${j}${m} `;
          }
        }
      }
    }
  }
  console.log(result);
}
barcodeGen(['2345', '6789']);
