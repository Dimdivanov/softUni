function uniquePinCodes(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  for (let i = 2; i <= num1; i++) {
    for (let j = 2; j <= num2; j++) {
      for (let k = 2; k <= num3; k++) {
        if (i % 2 === 0) {
          if (j === 2 || j % 2 !== 0) {
            if (k % 2 === 0) {
              console.log(`${i} ${j} ${k}`);
            }
          }
        }
      }
    }
  }
}
uniquePinCodes(['8', '2', '8']);
