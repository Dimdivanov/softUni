function squareFrame(input) {
  let n = Number(input[0]);

  for (let i = 1; i <= n; i++) {
    let lineBuild = '';

    for (let j = 1; j <= n; j++) {
      lineBuild = '+ ';
    }
    console.log(lineBuild);
  }
}
squareFrame(['4']);
