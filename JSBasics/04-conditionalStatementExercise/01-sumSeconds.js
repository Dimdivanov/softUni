function sumSeconds(input) {
  let time1 = Number(input[0]);
  let time2 = Number(input[1]);
  let time3 = Number(input[2]);

  let sumSeconds = time1 + time2 + time3;

  let mins = Math.floor(sumSeconds / 60);
  let sec = sumSeconds % 60;

  if (sec < 10) {
    console.log(`${mins}:0${sec}`);
  } else {
    console.log(`${mins}:${sec}`);
  }
}

sumSeconds(['35', '45', '44']);
