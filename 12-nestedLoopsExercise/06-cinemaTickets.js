function cinemaTickets(input) {
  let index = 0;

  let command = input[index];
  index++;

  let studentTicketCount = 0;
  let standardTicketCount = 0;
  let kidTicketCount = 0;

  while (command !== 'Finish') {
    let movieName = command;

    let freeSeats = Number(input[index]);
    index++;

    let command1 = input[index];
    index++;

    let takenSeats = 0;

    while (command1 !== 'End') {
      let ticketType = command1;
      takenSeats++;

      if (ticketType === 'student') {
        studentTicketCount++;
      } else if (ticketType === 'standard') {
        standardTicketCount++;
      } else {
        kidTicketCount++;
      }

      if (takenSeats === freeSeats) {
        break;
      }
      command1 = input[index];
      index++;
    }

    let percentageSeatsTaken = (takenSeats / freeSeats) * 100;
    console.log(`${movieName} - ${percentageSeatsTaken.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }

  let allTickets = studentTicketCount + standardTicketCount + kidTicketCount;
  console.log(`Total tickets: ${allTickets}`);

  let studentPercents = (studentTicketCount / allTickets) * 100;
  let standardPercents = (standardTicketCount / allTickets) * 100;
  let kidPercents = (kidTicketCount / allTickets) * 100;

  console.log(`${studentPercents.toFixed(2)}% student tickets.`);
  console.log(`${standardPercents.toFixed(2)}% standard tickets.`);
  console.log(`${kidPercents.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  'Taxi',
  '10',
  'standard',
  'kid',
  'student',
  'student',
  'standard',
  'standard',
  'End',
  'Scary Movie',
  '6',
  'student',
  'student',
  'student',
  'student',
  'student',
  'student',
  'Finish',
]);
