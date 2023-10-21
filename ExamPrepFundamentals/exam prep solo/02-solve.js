function shootTargets(input) {
  let targets = input[0].split(' ').map(Number);
  let shotTargets = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === 'End') {
      break;
    }

    let index = Number(input[i]);

    if (index < 0 || index >= targets.length || targets[index] === -1) {
      continue;
    }

    let targetValue = targets[index];
    shotTargets++;
    targets[index] = -1;

    targets = targets.map((target) => {
      if (target !== -1) {
        if (target > targetValue) {
          return target - targetValue;
        } else if (target <= targetValue) {
          return target + targetValue;
        }
      }
      return target;
    });
  }

  console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}
shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
