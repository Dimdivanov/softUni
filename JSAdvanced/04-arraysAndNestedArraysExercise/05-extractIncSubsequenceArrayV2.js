function extractIncSubsequenceArray(arr) {
  let biggest = arr.shift();
  let result = [];
  result.push(biggest);
  arr.filter((element) => {
    if (biggest <= element) {
      biggest = element;
      result.push(element);
    }
  });
  return result;
}
console.log(extractIncSubsequenceArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncSubsequenceArray([20, 3, 2, 15, 6, 1]));
