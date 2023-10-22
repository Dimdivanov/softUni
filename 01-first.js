function experiencedGaming(input) {
  let xpNeeded = input.shift(); //xp needed
  let countOfBattles = input.shift(); //counted battles 5

  let xpGained = 0;
  let battleCount = 0;
  for (let i = 0; i < input.length; i++) {
    battleCount++;
    let xpPerBattle = input[i];

    if (battleCount % 3 == 0) {
      //every third battle
      xpGained += xpPerBattle * 1.15;
    } else if (battleCount % 5 == 0) {
      xpGained += xpPerBattle - xpPerBattle * 0.1;
    } else if (battleCount % 15 == 0) {
      xpGained += xpPerBattle + xpPerBattle * 0.05;
    } else {
      xpGained += xpPerBattle;
    }
  }
  if (xpGained >= xpNeeded) {
    console.log(
      `Player successfully collected his needed experience for ${battleCount} battles.`
    );
  } else {
    let xpToTank = xpNeeded - xpGained;
    console.log(
      `Player was not able to collect the needed experience, ${xpToTank.toFixed(
        2
      )} more needed.`
    );
  }
}
experiencedGaming([
  500,

  5,

  50,

  100,

  200,

  100,

  30,
]);
