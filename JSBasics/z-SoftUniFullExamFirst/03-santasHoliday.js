function santasHoliday(input) {
  let daysToStay = Number(input[0]);
  let typeOfRoom = input[1];
  let grade = input[2];

  let nightsCalc = daysToStay - 1;

  let priceForStaying = 0;

  switch (typeOfRoom) {
    case 'room for one person':
      priceForStaying = nightsCalc * 18;
      break;
    case 'apartment':
      priceForStaying = nightsCalc * 25;
      if (daysToStay < 10) {
        priceForStaying -= priceForStaying * 0.3;
      } else if (daysToStay >= 10 && daysToStay <= 15) {
        priceForStaying -= priceForStaying * 0.35;
      } else if (daysToStay > 15) {
        priceForStaying -= priceForStaying / 2;
      }
      break;
    case 'president apartment':
      priceForStaying = nightsCalc * 35;
      if (daysToStay < 10) {
        priceForStaying -= priceForStaying * 0.1;
      } else if (daysToStay >= 10 && daysToStay <= 15) {
        priceForStaying -= priceForStaying * 0.15;
      } else if (daysToStay > 15) {
        priceForStaying -= priceForStaying * 0.2; //145
      }
      break;
  }

  if (grade === 'positive') {
    priceForStaying += priceForStaying * 0.25;
  } else {
    priceForStaying *= 0.9;
  }
  console.log(priceForStaying.toFixed(2));
}
santasHoliday(['30', 'president apartment', 'negative']);
