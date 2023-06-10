function swimRecord(input) {
  let recordSeconds = Number(input[0]);
  let meterDistance = Number(input[1]);
  let meterInSeconds = Number(input[2]);

  let distance = meterDistance * meterInSeconds;
  let resistance = Math.floor(meterDistance / 15) * 12.5;

  let totalTime = distance + resistance;

  if (totalTime >= recordSeconds) {
    let timeNeeded = Math.abs(recordSeconds - totalTime);
    console.log(
      `No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  }
}
swimRecord(['10464', '1500', '20']);
