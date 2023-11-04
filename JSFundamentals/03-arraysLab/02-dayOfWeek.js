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
  let result = arry[num - 1];
  if (result != undefined) {
    console.log(result);
  } else {
    console.log('Invalid day!');
  }
}
dayOfWeek(-3);
