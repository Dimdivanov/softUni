function add(num1) {
  let sum = num1;
  function add1(num2) {
    sum += num2;
    return add1;
  }
  add1.toString = function () {
    return sum;
  };
  return add1;
}

console.log(add(1)(6)(-3));
