function dayOfWeek(num) {
  let arry = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  if (num >= 1 && num <= 7) {
    console.log(arry[num - 1]);
  } else {
    console.log('Invalid day!');
  }
}
dayOfWeek(7);
