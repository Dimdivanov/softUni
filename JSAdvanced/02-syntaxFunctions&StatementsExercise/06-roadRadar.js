function roadRadar(speed, area) {
  let motorwayLimit = 130;
  let interstateLimit = 90;
  let cityLimit = 50;
  let residentialLimit = 20;

  let lawBroken = false;
  let difference = 0;
  let speedLimit = 0;
  let status = '';
  switch (area) {
    case 'city':
      speedLimit = cityLimit;
      if (speed > cityLimit) {
        lawBroken = true;
        difference += speed - cityLimit;
      }
      break;
    case 'residential':
      speedLimit = residentialLimit;
      if (speed > residentialLimit) {
        lawBroken = true;
        difference += speed - residentialLimit;
      }
      break;
    case 'interstate':
      speedLimit = interstateLimit;
      if (speed > interstateLimit) {
        lawBroken = true;
        difference += speed - interstateLimit;
      }
      break;
    case 'motorway':
      speedLimit = motorwayLimit;
      if (speed > motorwayLimit) {
        lawBroken = true;
        difference += speed - motorwayLimit;
      }
      break;
  }

  if (difference >= 1 && difference <= 20) {
    status = 'speeding';
  } else if (difference > 20 && difference <= 40) {
    status = 'excessive speeding';
  } else {
    status = 'reckless driving';
  }
  if (lawBroken) {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  } else {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  }
}
// roadRadar(40, 'city');
roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');
