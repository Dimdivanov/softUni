function reverseArrayOfNum(n, arry) {
  let myArray = [];
  for (let i = 0; i < n; i++) {
    myArray.push(arry[i]);
  }
  console.log(myArray.reverse().join(' '));
}
reverseArrayOfNum(3, [10, 20, 30, 40, 50]);
