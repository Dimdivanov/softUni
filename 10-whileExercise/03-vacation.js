function vacation(input) {
  let index = 0;

  let moneyForVacation = Number(input[index]);
  index++;

  let availableMoney = Number(input[index]);
  index++;

  let savedCount = 0;
  let spendCount = 0;

  while (availableMoney < moneyForVacation && spendCount < 5) {
    let action = input[index];
    index++;

    let money = Number(input[index]);
    index++;

    if (action === 'save') {
      availableMoney += money;
      spendCount = 0;
    } else if (action === 'spend') {
      availableMoney -= money;
      spendCount++;
    }

    if (availableMoney < 0) {
      availableMoney = 0;
    }

    savedCount++;
  }
  if (spendCount >= 5) {
    console.log(`You can't save the money.`);
    console.log(`${savedCount}`);
  } else if (availableMoney >= moneyForVacation) {
    console.log(`You saved the money for ${savedCount} days.`);
  }
}
vacation(['2000', '1000', 'spend', '1200', 'save', '2000']);
