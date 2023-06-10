function gameOfIntervals(input) {
  let turnsInGame = Number(input[0]);

  let result = 0;

  let invalidNumCount = 0;

  let lineTwoCount = 0;
  let lineThreeCount = 0;
  let lineFourCount = 0;
  let lineFiveCount = 0;
  let lineSixCount = 0;

  for (let i = 1; i <= turnsInGame; i++) {
    let gameNumber = Number(input[i]);

    if (gameNumber <= 9 && gameNumber >= 0) {
      lineTwoCount++;
      result += gameNumber * 0.2;
    } else if (gameNumber <= 19 && gameNumber >= 10) {
      lineThreeCount++;
      result += gameNumber * 0.3;
    } else if (gameNumber >= 20 && gameNumber <= 29) {
      lineFourCount++;
      result += gameNumber * 0.4;
    } else if (gameNumber >= 30 && gameNumber <= 39) {
      lineFiveCount++;
      result += 50;
    } else if (gameNumber >= 40 && gameNumber <= 50) {
      lineSixCount++;
      result += 100;
    } else {
      result /= 2;
      invalidNumCount++;
    }
  }

  let lineTwoPercent = (lineTwoCount / turnsInGame) * 100;
  let lineThreePercent = (lineThreeCount / turnsInGame) * 100;
  let lineFourPercent = (lineFourCount / turnsInGame) * 100;
  let lineFivePercent = (lineFiveCount / turnsInGame) * 100;
  let lineSixPercent = (lineSixCount / turnsInGame) * 100;
  let invalidNumPercent = (invalidNumCount / turnsInGame) * 100;

  console.log(`${result.toFixed(2)}`);
  console.log(`From 0 to 9: ${lineTwoPercent.toFixed(2)}%`);
  console.log(`From 10 to 19: ${lineThreePercent.toFixed(2)}%`);
  console.log(`From 20 to 29: ${lineFourPercent.toFixed(2)}%`);
  console.log(`From 30 to 39: ${lineFivePercent.toFixed(2)}%`);
  console.log(`From 40 to 50: ${lineSixPercent.toFixed(2)}%`);
  console.log(`Invalid numbers: ${invalidNumPercent.toFixed(2)}%`);
}
gameOfIntervals([
  '10',
  '43',
  '57',
  '-12',
  '23',
  '12',
  '0',
  '50',
  '40',
  '30',
  '20',
]);
