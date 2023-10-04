function magicNum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];
      let sum = curNum + nextNum;
      if (sum === n) {
        console.log(`${curNum} ${nextNum}`);
      }
    }
  }
}
magicNum([1, 7, 6, 2, 19, 23], 8);
