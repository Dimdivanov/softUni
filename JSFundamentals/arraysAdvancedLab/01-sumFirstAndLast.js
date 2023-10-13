function sumFirstAndLast(params) {
  let result = [];
  let num1 = Number(params.shift());
  let num2 = Number(params.pop());
  result.push(num1 + num2);
  console.log(result);
}
sumFirstAndLast(['20', '30', '40']);
