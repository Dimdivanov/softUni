function uniquePinCodes(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      for (let k = 1; k <= num3; k++) {
        console.log(`${i}`);
      }
    }
  }
}
uniquePinCodes(['3', '5', '5']);
