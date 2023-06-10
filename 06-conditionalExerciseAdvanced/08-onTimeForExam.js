function onTimeForExam(input) {
  let hourExam = Number(input[0]);
  let minuteExam = Number(input[1]);
  let hourArrival = Number(input[2]);
  let minuteArrival = Number(input[3]);

  let allHoursExam = hourExam * 60 + minuteExam; // обръщаме всички часове в минути и калкулираме
  let allMinutesArrival = hourArrival * 60 + minuteArrival; // обръщаме всички часове в минути и калкулираме

  let timeDifference = Math.abs(allHoursExam - allMinutesArrival); // time dif   530 - 550 = -20 with math abs is 20 (обръщаме отрицателното число в положително да ни изкара примерно 20 минути забавяне а не минус 20)

  let difHour = Math.floor(timeDifference / 60); // calculate Hour difference
  let difMinute = timeDifference % 60; // calculate minutes difference

  if (allHoursExam === allMinutesArrival) {
    // равни = на време
    console.log('On time');
  } else if (allHoursExam < allMinutesArrival) {
    // или < ако закъсняваме
    console.log('Late');

    if (timeDifference < 60) {
      // ако закъсняваме ПОД 60 минути
      console.log(`${timeDifference} minutes after the start`);
    } else {
      if (difMinute < 10) {
        // ако закъсняваме НАД 60 минути напиши Час : 0минути или Час: минути.
        console.log(`${difHour}:0${difMinute} hours after the start`); // ако е под 10 минути изписваме ${difHour}:0тазинула${difMinute}
      } else {
        console.log(`${difHour}:${difMinute} hours after the start`);
      }
    }
  } else {
    // ако > сме на време
    if (timeDifference <= 30) {
      console.log('On time');
      console.log(`${timeDifference} minutes before the start`);
    } else {
      console.log('Early');
      if (timeDifference < 60) {
        console.log(`${timeDifference} minutes before the start`);
      } else {
        if (difMinute < 10) {
          console.log(`${difHour}:0${difMinute} hours before the start`);
        } else {
          console.log(`${difHour}:${difMinute} hours before the start`);
        }
      }
    }
  }
}
onTimeForExam(['9', '00', '8', '30']);
