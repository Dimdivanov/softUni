function worldSwimmingRecord(input) {
  let currentWorldRecord = Number(input[0]);
  let distanceToBeatMetres = Number(input[1]);
  let ivanTimePerMeter = Number(input[2]);

  let ivansDistance = distanceToBeatMetres * ivanTimePerMeter;
  let waterResistance = Math.floor(distanceToBeatMetres / 15) * 12.5;

  let ivansTotalTimeCalc = ivansDistance + waterResistance;

  if (ivansTotalTimeCalc >= currentWorldRecord) {
    let secondsNeeded = Math.abs(currentWorldRecord - ivansTotalTimeCalc);
    console.log(
      `No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${ivansTotalTimeCalc.toFixed(
        2
      )} seconds.`
    );
  }
}
worldSwimmingRecord(['10464', '1500', '20']);
