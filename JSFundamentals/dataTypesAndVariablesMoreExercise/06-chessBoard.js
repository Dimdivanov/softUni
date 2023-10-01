function chessBoard(n) {
  let position = 0;

  console.log('<div class="chessboard">');
  for (let i = 0; i < n; i++) {
    console.log('  <div>');

    for (let j = 0; j < n; j++) {
      if (position % 2 == 0) {
        console.log('    <span class="black"></span>');
      } else {
        console.log('    <span class="white"></span>');
      }
      position += 1;
    }

    console.log('  </div>');
  }
}
chessBoard(6);
