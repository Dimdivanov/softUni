function manageBattleBetweenShips(input) {
  let pirateShip = input.shift().split('>').map(Number);
  let warShip = input.shift().split('>').map(Number);
  let maxHealthCapacity = Number(input.shift());
  for (let element of input) {
    if (element === 'Retire') {
      break;
    }
    let el = element.split(' ');
    let currentCommand = el.shift();
    el = el.map(Number);
    switch (currentCommand) {
      case 'Fire':
        let [index, warShipDamage] = el;
        if (warShip[index]) {
          warShip[index] - warShipDamage < 0
            ? (warShip[index] = 0)
            : (warShip[index] -= warShipDamage);
        }

        if (warShip.includes(0)) {
          console.log('You won! The enemy ship has sunken.');
          return;
        }

        break;
      case 'Defend':
        let [startIndex, endIndex, pirateShipDamage] = el;
        if (pirateShip[startIndex] && pirateShip[endIndex]) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] - pirateShipDamage <= 0
              ? (pirateShip[i] = 0)
              : (pirateShip[i] -= pirateShipDamage);
          }
        }
        if (pirateShip.includes(0)) {
          console.log('You lost! The pirate ship has sunken.');
          return;
        }

        break;
      case 'Repair':
        let [repairIndex, health] = el;
        if (pirateShip[repairIndex]) {
          pirateShip[repairIndex] + health > maxHealthCapacity
            ? (pirateShip[repairIndex] = maxHealthCapacity)
            : (pirateShip[repairIndex] += health);
        }

        break;
      case 'Status':
        let allSectionsForRepair = pirateShip.filter(
          (a) => a < maxHealthCapacity * 0.2
        );
        console.log(`${allSectionsForRepair.length} sections need repair.`);
        break;
    }
  }

  let pirateShipStatus = pirateShip.reduce((a, b) => a + b, 0);
  let warShipStatus = warShip.reduce((a, b) => a + b, 0);
  console.log(
    `Pirate ship status: ${pirateShipStatus}\nWarship status: ${warShipStatus}`
  );
}
