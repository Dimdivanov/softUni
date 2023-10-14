function firstAndLastK(arr) {
  let firstElement = arr.shift();

  console.log(arr.slice(0, firstElement).join(' '));
  console.log(arr.slice(-firstElement).join(' '));
}
firstAndLastK([2, 7, 8, 9]);
