function uniquePinCodes(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  for (let i = 1; i <= num1; i++) {
    // if (i % 2 === 0) {
    //   result = `${i}`;
    // }
    for (let j = 1; j <= num2; j++) {
      // if (j % 2 === 0) {
      //   result = `${j}`;
      // }
      for (let k = 1; k <= num3; k++) {
        let result = 0;

        if (k % 2 === 0) {
          result = `${k}`;
        }
        console.log(`${k}`);
      }
    }
  }
}
uniquePinCodes(['3', '5', '5']);
