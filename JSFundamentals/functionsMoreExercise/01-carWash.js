function carWash(command) {
  let cleanedPercent = 0;

  for (let el of command) {
    if (el == 'soap') {
      cleanedPercent += 10;
    } else if (el == 'water') {
      cleanedPercent += cleanedPercent * 0.2;
    } else if (el == 'vacuum cleaner') {
      cleanedPercent += cleanedPercent * 0.25;
    } else {
      cleanedPercent -= cleanedPercent * 0.1;
    }
  }

  console.log(`The car is ${cleanedPercent.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
