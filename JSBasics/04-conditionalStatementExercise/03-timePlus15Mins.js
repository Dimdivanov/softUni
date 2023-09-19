function timePlus15Mins(input) {
  let hours = Number(input[0]);
  let mins = Number(input[1]);

  let minutesInHour = hours * 60;
  let allMinutes = minutesInHour + mins + 15;

  let hoursLeft = Math.floor(allMinutes / 60);
  let minutesLeft = allMinutes % 60;

  if (hoursLeft == 24) {
    hoursLeft = 0;
  }

  if (minutesLeft < 10) {
    console.log(`${hoursLeft}:0${minutesLeft}`);
  } else {
    console.log(`${hoursLeft}:${minutesLeft}`);
  }
}

timePlus15Mins(["23", "59"]);
