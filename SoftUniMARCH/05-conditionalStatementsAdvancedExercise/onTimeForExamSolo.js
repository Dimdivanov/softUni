function onTimeForExam(input) {
  let hourExam = Number(input[0]);
  let minuteExam = Number(input[1]);
  let hourArrival = Number(input[2]);
  let minuteArrival = Number(input[3]);

  let allHoursExam = hourExam * 60 + minuteExam; // all minutes exam
  let allMinutesArrival = hourArrival * 60 + minuteArrival; // all minute arrival

  let timeDifference = Math.abs(allHoursExam - allMinutesArrival); // time dif   530 - 550 = -20 with math abs is 20
  let difHour = Math.floor(timeDifference / 60); // calculate Hour difference
  let difMinute = timeDifference % 60; // calculate minutes difference

  if (allHoursExam === allMinutesArrival) {
    console.log('On time');
  } else if (allHoursExam < allMinutesArrival) {
    console.log('Late');
    if (timeDifference < 60) {
      console.log(`${timeDifference} minutes after the start`);
    } else {
      if (difMinute < 10) {
        console.log(`${difHour}:0${difMinute} after the start`);
      } else {
        console.log(`${difHour}:${difMinute} after the start`);
      }
    }
  } else {
    if (timeDifference <= 30) {
      console.log('On time');
      console.log(`${timeDifference} before the start`);
    } else {
      console.log('Early');
      if (timeDifference < 60) {
        console.log(`${timeDifference} minutes before the start`);
      } else {
        if (difMinute < 10) {
          console.log(`${difHour}:0${difMinute} before the start`);
        } else {
          console.log(`${difHour}:${difMinute} before the start`);
        }
      }
    }
  }
}
onTimeForExam(['9', '00', '10', '30']);
