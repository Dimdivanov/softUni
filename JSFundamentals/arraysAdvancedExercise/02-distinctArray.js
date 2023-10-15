function distinctArr(arr) {
  let newArr = [];

  for (let number of arr) {
    if (!newArr.includes(number)) {
      newArr.push(number);
    }
  }
  console.log(newArr.join(' '));
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
