function sumFirstAndLast(params) {
  let num1 = Number(params.shift());
  let num2 = Number(params.pop());

  console.log(num1 + num2);
}
sumFirstAndLast(['20', '30', '40']);
