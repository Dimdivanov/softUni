function skiTrip(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let feedBack = input[2];

  let evening = days - 1;
  let price = 0;

  switch (roomType) {
    case 'room for one person':
      price = evening * 18;
      break;
    case 'apartment':
      price = evening * 25;
      if (evening < 10) {
        price *= 0.7;
      } else if (evening >= 10 && evening <= 15) {
        price *= 0.65;
      } else {
        price *= 0.5;
      }
      break;
    case 'president apartment':
      price = evening * 35;
      if (evening < 10) {
        price *= 0.9;
      } else if (evening >= 10 && evening <= 15) {
        price *= 0.85;
      } else {
        price *= 0.8;
      }
      break;
  }

  if (feedBack === 'positive') {
    price *= 1.25;
  } else {
    price *= 0.9;
  }

  console.log(price.toFixed(2));
}
skiTrip(['14', 'apartment', 'positive']);
