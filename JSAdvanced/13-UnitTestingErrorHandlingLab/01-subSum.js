function subSum(array, starIdx, endIdx) {
  if (!Array.isArray(array)) {
    let error = new TypeError('Must give an array');
    throw error;
  }
  if (starIdx < 0) {
    starIdx = 0;
  }
  if (endIdx >= array.length) {
    endIdx = array.length - 1;
  }
  let sum = 0;
  for (let i = starIdx; i <= endIdx; i++) {
    sum += Number(array[i]);
  }
  return sum;
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
