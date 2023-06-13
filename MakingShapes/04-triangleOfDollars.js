function triangleDollar(input) {
  let n = Number(input[0]);

  for (let line = 1; line <= n; line++) {
    let lineBuild = '';

    for (let row = 1; row <= line; row++) {
      lineBuild += '$ ';
    }
    console.log(lineBuild);
  }
}
triangleDollar(['5']);
