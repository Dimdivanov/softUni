function ticketsStatistic(arrOfTickets, sortCriteria) {
  let result = [];
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  for (let el of arrOfTickets) {
    let [destination, price, status] = el.split('|');
    let myTicket = new Ticket(destination, price, status);
    result.push(myTicket);
  }

  return sortTickets(result, sortCriteria);

  function sortTickets(ticketArr, criteria) {
    return ticketArr.sort((a, b) => a[criteria].localeCompare(b[criteria]));
  }
}

let res = ticketsStatistic(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);

console.log(res);
