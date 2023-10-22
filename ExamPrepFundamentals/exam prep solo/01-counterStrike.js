function counterStrike(arr) {
  //parse input
  let energy = arr.shift(); // 100 първи елемент
  let command = arr.shift(); // 10 първа дистанция

  let battlesWon = 0;

  while (command !== 'End of battle' || energy - command > 0) {
    if (energy <= 0) {
      console.log(
        `Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`
      );
      break;
    } else if (energy > 0) {
      energy -= command;
      battlesWon++;
      if (battlesWon % 3 == 0) {
        energy += battlesWon;
      }
    }
    command = arr.shift();
  }

  if (command == 'End of battle') {
    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
  }
}
counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']);
