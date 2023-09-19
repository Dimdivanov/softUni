function multiplicationTable() {
  for (let num1 = 1; num1 <= 10; num1++) {
    for (let num2 = 1; num2 <= 10; num2++) {
      let result = num1 * num2;
      console.log(`${num1} * ${num2} = ${result}`);
    }
  }
}
multiplicationTable();
