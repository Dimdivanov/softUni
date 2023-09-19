function familyTrip(input) {
  let budget = Number(input[0]); //budget money
  let numNights = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let percentMore = Number(input[3]);

  let calcNights = pricePerNight * numNights; //800 lv
  let discountedNight = calcNights * 0.95; //760lv for discount
  let additionalExpense = budget * (percentMore / 100); //16.01 lv

  if (numNights > 7) {
    calcNights = discountedNight;
  }

  let allExpenses = calcNights + additionalExpense;

  if (allExpenses <= budget) {
    let moneyLeft = budget - allExpenses;
    console.log(
      `Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`
    );
  } else {
    let moneyNeeded = allExpenses - budget;
    console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
  }
}
familyTrip(['800.50', '8', '100', '2']);
