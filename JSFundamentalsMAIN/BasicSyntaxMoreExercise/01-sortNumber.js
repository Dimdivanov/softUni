function sortNum(num1, num2, num3) {
  let num = [num1, num2, num3];

  num.sort((a, b) => b - a);

  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    console.log(num[1]);
  }
}

sortNum(-2, 4, 3);
