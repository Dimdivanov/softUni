function squareFrame(input) {
  let n = Number(input[0]);
  let lineBuild = '';
  for (let i = 1; i <= 1; i++) {
    lineBuild += '+ ' + '- '.repeat(n - 2) + '+';
    for (let k = 1; k <= n - 2; k++) {
      lineBuild += '\n' + '| ' + '- '.repeat(n - 2) + '|';
    }
    for (let j = 1; j <= 1; j++) {
      lineBuild += '\n' + '+ ' + '- '.repeat(n - 2) + '+';
    }
    console.log(lineBuild);
  }
}
squareFrame(['6']);
