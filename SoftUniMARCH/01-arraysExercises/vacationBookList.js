function vacationBooks(input) {
  let pagesInBook = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);

  let timePerBook = pagesInBook / pagesPerHour;
  let hoursPerDay = timePerBook / days;

  console.log(hoursPerDay);
}
vacationBooks(['212 ', '20 ', '2 ']);
vacationBooks(['432 ', '15 ', '4 ']);
