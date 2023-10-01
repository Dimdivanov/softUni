function chessBoard(n) {
  let currentColor = '    <span class="black"></span>';
  console.log('<div class="chessboard">');

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
  console.log('</div>');
}
chessBoard(3);
