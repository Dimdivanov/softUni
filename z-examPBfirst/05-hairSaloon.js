function hairSaloon(input) {
  let index = 0;

  let moneyGoal = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let profits = 0;

  while (command !== 'closed' && profits < moneyGoal) {
    let service = command; //color

    let typeOfWork = input[index]; //full color
    index++;
    if (service === 'haircut') {
      if (typeOfWork === 'mens') {
        profits += 15;
      } else if (typeOfWork === 'ladies') {
        profits += 20;
      } else {
        profits += 10;
      }
    } else {
      if (typeOfWork === 'touch up') {
        profits += 20;
      } else {
        profits += 30;
      }
    }

    if (profits === moneyGoal) {
      break;
    }
    command = input[index];
    index++;
  }
  if (moneyGoal <= profits) {
    console.log('You have reached your target for the day!');
  } else {
    let moneyNeeded = moneyGoal - profits;
    console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
  }
  console.log(`Earned money: ${profits}lv.`);
}

hairSaloon(['50', 'color', 'full color', 'haircut', 'ladies']);
