function daysInMonth(date, year) {
  const datOfMonth = new Date(year, date, 0);
  console.log(datOfMonth.getDate());
}
daysInMonth(1, 2019);
