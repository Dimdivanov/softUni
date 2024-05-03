function solve(arr) {
  let result = arr.reduce((acc, curEl) => acc + curEl);
  console.log((result / arr.length).toFixed(2));
}
solve([85.9, 85.4, 86.1, 86.3, 85.9, 85.4, 85.3]);
