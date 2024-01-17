function extractIncSubsequenceArray(arr) {
  let curMax = arr[0];

  return arr.filter((num) => {
    if (num >= curMax) {
      curMax = num;
      return true;
    } else {
      return false;
    }
  });
}
console.log(extractIncSubsequenceArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncSubsequenceArray([20, 3, 2, 15, 6, 1]));
