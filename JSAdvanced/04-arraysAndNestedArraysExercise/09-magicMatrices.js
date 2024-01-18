function magicMatrices(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let rowOne = arr.reduce((acc, value, index) => {
      acc += value[i];
      return acc;
    }, 0);
    let rowTwo = arr.reduce((acc, value, index) => {
      acc += value[i + 1];
      return acc;
    }, 0);
    let colOne = arr[i].reduce((acc, value) => acc + value);
    let colTwo = arr[i + 1].reduce((acc, value) => acc + value);

    if (rowOne !== rowTwo || colOne !== colTwo) {
      return false;
    }
  }
  return true;
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
