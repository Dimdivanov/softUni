function arrayRotation(arr, n) {
  for (let i = 0; i < n; i++) {
    let shiftedElement = arr.shift();
    arr.push(shiftedElement);
  }
  console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
