function calculator(num1, operator, num2) {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      console.log(result.toFixed(2));
      break;
    case '-':
      result = num1 - num2;
      console.log(result.toFixed(2));
      break;
    case '*':
      result = num1 * num2;
      console.log(result.toFixed(2));
      break;
    case '/':
      result = num1 / num2;
      console.log(result.toFixed(2));
      break;
  }
}
calculator(5, '*', 10);
