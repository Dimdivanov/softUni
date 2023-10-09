function nMatrix(n) {
  for (let i = 0; i < n; i++) {
    let buffer = '';
    for (let j = 0; j < n; j++) {
      buffer += n + ' ';
    }
    console.log(buffer);
  }
}
nMatrix(7);
