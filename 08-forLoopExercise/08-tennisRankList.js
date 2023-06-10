function tennisRanklist(input) {
  let numTournamen = Number(input[0]);
  let startPoints = Number(input[1]);

  let averagePts = 0;
  let numWonTournament = 0;

  for (let i = 2; i < input.length; i++) {
    let letter = input[i];
    if (letter === 'W') {
      startPoints += 2000;
      averagePts += 2000 / numTournamen;
      numWonTournament++;
    } else if (letter === 'F') {
      startPoints += 1200;
      averagePts += 1200 / numTournamen;
    } else {
      startPoints += 720;
      averagePts += 720 / numTournamen;
    }
  }
  let percentWon = (numWonTournament / numTournamen) * 100;
  console.log(`Final points: ${startPoints}`);
  console.log(`Average points: ${Math.floor(averagePts)}`);
  console.log(`${percentWon.toFixed(2)}%`);
}
tennisRanklist(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);
