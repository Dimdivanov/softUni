function subSum(array, starIdx, endIdx) {
  if (!Array.isArray(array)) {
    return NaN;
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
console.log(subSum('text', 3, 300));
