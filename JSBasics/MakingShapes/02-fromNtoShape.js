function fromNumToShape(input) {
  let n = Number(input[0]);
  for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
      row += '* ';
    }
    console.log(row);
  }
}
fromNumToShape(['6']);
