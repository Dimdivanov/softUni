function tournament(input) {
  let index = 0;
  let tournamentDays = input[index];
  index++;

  let moneyWon = 0;

  let gamesWon = 0;
  let gamesLost = 0;

  let tournamentWon = false;

  for (let i = 0; i < tournamentDays; i++) {
    let command = input[index];
    index++;

    let dailyWin = 0;
    let dailyLose = 0;

    let dailyMoney = 0;

    while (command !== 'Finish') {
      let gameResult = input[index];
      index++;

      if (gameResult === 'win') {
        dailyWin++;
        dailyMoney += 20;
      } else {
        dailyLose++;
      }

      command = input[index];
      index++;
    }

    moneyWon += dailyMoney;

    if (dailyWin > dailyLose) {
      moneyWon += dailyMoney * 0.1;
      gamesWon++;
    } else {
      gamesLost++;
    }

    if (command === 'Finish') {
      dailyMoney = 0;
    }
  }

  if (gamesWon > gamesLost) {
    tournamentWon = true;
  }

  if (tournamentWon) {
    moneyWon += moneyWon * 0.2;
    console.log(
      `You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`
    );
  }
}
tournament([
  '3',
  'darts',
  'lose',
  'handball',
  'lose',
  'judo',
  'win',
  'Finish',
  'snooker',
  'lose',
  'swimming',
  'lose',
  'squash',
  'lose',
  'table tennis',
  'win',
  'Finish',
  'volleyball',
  'win',
  'basketball',
  'win',
  'Finish',
]);
