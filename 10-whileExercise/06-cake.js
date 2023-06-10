function cake(input) {
  index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;
  let piecesOfCake = input[index];
  index++;

  let cakePieces = width * length;

  while (piecesOfCake !== 'STOP') {
    piecesOfCake = Number(piecesOfCake);
    cakePieces -= piecesOfCake;

    if (cakePieces <= 0) {
      break;
    }

    piecesOfCake = input[index];
    index++;
  }

  if (piecesOfCake === 'STOP') {
    console.log(`${cakePieces} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(cakePieces)} pieces more.`
    );
  }
}
cake(['10', '10', '20', '20', '20', '20', '21']);
