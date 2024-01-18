function sortingNumbers(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  let length = arr.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    console.log(arr[i]);
    console.log(arr[length - (i + 1)]);
    if (length % 2 !== 0 && i + 1 === Math.floor(length / 2)) {
      result.push(arr[length - (i + 2)]);
    }
  }
  return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
