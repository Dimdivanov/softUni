function radiansToDegrees(input) {
  let radiants = Number(input[0]);
  let degrees = (radiants * 180) / Math.PI;

  console.log(degrees);
}

radiansToDegrees(['3.1416']);
radiansToDegrees(['6.2832']);
