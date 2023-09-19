function agencyProfit(input) {
  let avioName = input[0];

  let elderlyTickets = Number(input[1]);
  let childTickets = Number(input[2]);

  let netoAdultTicket = Number(input[3]);
  let tax = Number(input[4]);

  let netoChildTicket = netoAdultTicket - netoAdultTicket * 0.7;
  let adultAfterTax = netoAdultTicket + tax;
  let childAfterTax = netoChildTicket + tax;

  let result = childTickets * childAfterTax + elderlyTickets * adultAfterTax;
  let profits = result * 0.2;
  console.log(
    `The profit of your agency from ${avioName} tickets is ${profits.toFixed(
      2
    )} lv.`
  );
}
agencyProfit(['WizzAir', '15', '5', '120', '40']);
