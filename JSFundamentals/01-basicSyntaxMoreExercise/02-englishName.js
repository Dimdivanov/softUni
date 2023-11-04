function englishName(num) {
  let lastDig = Number(num % 10);
  if (lastDig === 1) {
    console.log('one');
  } else if (lastDig === 2) {
    console.log('two');
  } else if (lastDig === 3) {
    console.log('three');
  } else if (lastDig === 4) {
    console.log('four');
  } else if (lastDig === 5) {
    console.log('five');
  } else if (lastDig === 6) {
    console.log('six');
  } else if (lastDig === 7) {
    console.log('seven');
  } else if (lastDig === 8) {
    console.log('eight');
  } else if (lastDig === 9) {
    console.log('nine');
  } else {
    console.log('zero');
  }
}
englishName(-2);
