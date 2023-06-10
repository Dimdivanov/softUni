function cinemaTickets(input) {
  let type = input[0];
  let numRows = Number(input[1]);
  let numColumns = Number(input[2]);
  let income = 0;

  if (type == 'Premiere') {
    income = numColumns * numRows * 12;
  } else if (type == 'Normal') {
    income = numColumns * numRows * 7.5;
  } else if (type == 'Discount') {
    income = numColumns * numRows * 5;
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinemaTickets(['Normal', '21', '13']);
