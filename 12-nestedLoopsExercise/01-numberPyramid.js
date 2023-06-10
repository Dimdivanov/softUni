function numPyramid(input) {
  let n = Number(input[0]);

  let current = 1;

  let isBigger = false;
  let printCurrentline = '';

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      printCurrentline += current + ' ';
      current++;
    }

    console.log(printCurrentline);
    printCurrentline = '';
    if (isBigger) {
      break;
    }
  }
}
numPyramid(['7']);
