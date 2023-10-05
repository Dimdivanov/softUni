function rotateArray(arr) {
  let rotations = Number(arr[arr.length - 1]);
  arr.pop();
  for (let i = 0; i < rotations; i++) {
    let shiftedElement = arr.shift(arr[i]);
    arr.push(shiftedElement);
  }
  console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
