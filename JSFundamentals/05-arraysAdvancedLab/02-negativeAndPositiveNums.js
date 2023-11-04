function negativeAndPositive(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let curNum = Number(arr[i]);
    if (curNum < 0) {
      newArr.unshift(curNum);
    } else {
      newArr.push(curNum);
    }
  }
  console.log(newArr.join('\n'));
}
negativeAndPositive(['7', '-2', '8', '9']);
