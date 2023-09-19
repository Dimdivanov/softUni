function bestPlayer(input) {
  let index = 0;

  let command = input[index];
  index++;

  let bestScore = 0;
  let bestPlayer = '';
  let hatrick = false;

  while (command !== 'END') {
    let currentPlayer = command; //imeto

    let playerCurGoals = Number(input[index]); // golovete
    index++;

    if (playerCurGoals > bestScore) {
      bestPlayer = currentPlayer;
      bestScore = playerCurGoals;
    }

    if (playerCurGoals >= 3) {
      hatrick = true;
    }

    if (playerCurGoals >= 10) {
      break;
    }

    command = input[index];
    index++;
  }

  console.log(`${bestPlayer} is the best player!`);

  if (hatrick) {
    console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${bestScore} goals.`);
  }
}
bestPlayer(['Petrov', '2', 'Drogba', '11']);
