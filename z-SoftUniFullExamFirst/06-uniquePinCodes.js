function pinCode(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  for (let i = 2; i <= num1; i += 2) {
    if (i % 2 === 0) {
      for (let j = 2; j <= num2; j++) {
        if (j == 2 || j == 3 || j == 5 || j == 7) {
          for (let k = 2; k <= num3; k += 2) {
            if (k % 2 === 0) {
              console.log(`${i} ${j} ${k}`);
            }
          }
        }
      }
    }
  }
}
pinCode(['3', '5', '5']);
