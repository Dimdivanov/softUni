function lunchBreak(input) {
  let serial = input[0];
  let episodeTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let timeLunch = breakTime / 8;
  let timeRelax = breakTime / 4;
  let timeLeft = breakTime - timeLunch - timeRelax;

  if (timeLeft >= episodeTime) {
    let freeTime = Math.ceil(timeLeft - episodeTime);
    console.log(
      `You have enough time to watch ${serial} and left with ${freeTime} minutes free time.`
    );
  } else {
    let remainingTime = Math.ceil(episodeTime - timeLeft);
    console.log(
      `You don't have enough time to watch ${serial}, you need ${remainingTime} more minutes.`
    );
  }
}
lunchBreak(['Game of Thrones', '54.4', '96']);
