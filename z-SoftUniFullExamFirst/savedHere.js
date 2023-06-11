function uniquePinCodes(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  for (let i = 2; i <= num1; i++) {
    for (let j = 2; j <= num2; j++) {
      for (let k = 2; k <= num3; k++) {
        for (let divider = 2; divider < 7; divider++) {
          if (i % 2 === 0) {
            if (j % divider === 2 || j % divider === 3 || j % divider === 5) {
              if (k % 2 === 0) {
                console.log(`${i} ${j} ${k}`);
              }
              break;
            }
          }
        }
      }
    }
  }
}
uniquePinCodes(['3', '5', '5']);
