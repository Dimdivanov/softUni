function examOnTime(input) {
  let hourExam = Number(input[0]);
  let minExam = Number(input[1]);
  let hourArrival = Number(input[2]);
  let minArrival = Number(input[3]);

  let examTime = hourExam * 60 + minExam; //total minutes exam
  let arrivalTime = hourArrival * 60 + minArrival; //total minutes arrival

  let totalDifferentTime = Math.abs(examTime - arrivalTime); //totalna razlika 570 minuti - 590 primerno = 20 if negative math.abs makes it positive
  let diffHour = Math.floor(totalDifferentTime / 60); //razlika v chas tuk syotvetno e ravno na nula
  let diffMin = totalDifferentTime % 60; //razlika v minuti tuk poluchenite 20 modulo ot 60 e pak 20

  if (examTime === arrivalTime) {
    console.log('On time');
  } else if (examTime < arrivalTime) {
    console.log('Late');
    if (totalDifferentTime < 60) {
      console.log(`${totalDifferentTime} minutes after the start`);
    } else {
      if (diffMin < 10) {
        console.log(`${diffHour}:0${diffMin} hours after the start`);
      } else {
        console.log(`${diffHour}:${diffMin} hours after the start`);
      }
    }
  } else {
    if (totalDifferentTime <= 30) {
      console.log('On time');
      console.log(`${totalDifferentTime} minutes before the start`);
    } else {
      console.log(`Early`);
      if (totalDifferentTime < 60) {
        console.log(`${totalDifferentTime} minutes before the start`);
      } else {
        if (diffMin < 10) {
          console.log(`${diffHour}:0${diffMin} hours before the start`);
        } else {
          console.log(`${diffHour}:${diffMin} hours before the start`);
        }
      }
    }
  }
}
examOnTime(['9', '30', '9', '50']);
