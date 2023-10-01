function chessBoard(n) {
  console.log('<div class="chessboard">');
  let currentColor = '    <span class="black"></span>';
  for (let i = 0; i < n; i++) {
    console.log('  <div>');
    for (let j = 0; j < n; j++) {
      if (currentColor === '    <span class="black"></span>') {
        console.log('    <span class="black"></span>');
        currentColor = '    <span class="white"></span>';
      } else {
        console.log('    <span class="white"></span>');
        currentColor = '    <span class="black"></span>';
      }
    }

    console.log('  </div>');
  }
}
chessBoard(6);
