function numTree(n) {
  let num = 1;
  for (let row = 1; row <= n; row++) {
    if (num > n) {
      break;
    }
    let output = '';

    for (let col = 1; col <= row; col++) {
      if (num > n) {
        break;
      }
      output += num++ + ' ';
    }
    console.log(output);
  }
}
numTree(['12']);
