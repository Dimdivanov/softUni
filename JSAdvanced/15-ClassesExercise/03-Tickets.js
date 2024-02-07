function tickets(arr, str) {
  for (let info of arr) {
    let curInfo = info.split('|');
    console.log(curInfo);
  }

  class Ticket {
    constructor(destinationName, price, status) {
      this.destinationName = destinationName;
      this.price = price;
      this.status = status;
    }
  }
}
tickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
