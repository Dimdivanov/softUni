function nextDay(year, month, day) {
  let currentDate = new Date(year, month - 1, day);

  currentDate.setDate(currentDate.getDate() + 1);

  let nextYear = currentDate.getFullYear();
  let nextMonth = currentDate.getMonth() + 1; //месеца е +1 защото месеците са zero based
  let nextDay = currentDate.getDate(); // ден

  console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}
nextDay(2016, 9, 30);
