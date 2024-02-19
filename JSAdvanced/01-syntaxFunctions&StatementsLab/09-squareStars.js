function squareStars(size) {
  for (let i = 0; i < size; i++) {
    let result = '* '.repeat(size);
    console.log(result);
  }
}
squareStars(5);
