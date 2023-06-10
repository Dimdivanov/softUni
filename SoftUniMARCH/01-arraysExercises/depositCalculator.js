function depositCalculator(input) {
  let depositAmount = Number(input[0]);
  let montlyDeposit = Number(input[1]);
  let yearInterest = Number(input[2]);

  let interest = depositAmount * (yearInterest / 100);
  let montlyInterest = interest / 12;
  let sum = depositAmount + montlyDeposit * montlyInterest;

  console.log(sum);
}

depositCalculator(['200', '3', '5.7']);
depositCalculator(['2350', '6', '7']);
