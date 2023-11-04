function sortingArr(arr) {
  let newArr = [];
  let sorted = arr.sort((a, b) => a - b);

  while (sorted.length > 0) {
    let maxNum = sorted.pop();
    let minNum = sorted.shift();

    newArr.push(maxNum, minNum);
  }

  console.log(newArr.join(' '));
}
sortingArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
