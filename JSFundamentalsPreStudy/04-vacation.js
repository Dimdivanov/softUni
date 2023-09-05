function vacation(number, type, day) {
  let price = 0;

  switch (day) {
    case 'Friday':
      if (type === 'Students') {
        price = number * 8.45;
        if (number >= 30) {
          price *= 0.85;
        }
      } else if (type === 'Business') {
        if (number >= 100) {
          number -= 10;
        }
        price = number * 10.9;
      } else if (type === 'Regular') {
        price = number * 15;
        if (number >= 10 && number <= 20) {
          price *= 0.95;
        }
      }
      break;
    case 'Saturday':
      if (type === 'Students') {
        price = number * 9.8;
        if (number >= 30) {
          price *= 0.85;
        }
      } else if (type === 'Business') {
        if (number >= 100) {
          number -= 10;
        }
        price = number * 15.6;
      } else if (type === 'Regular') {
        price = number * 20;
        if (number >= 10 && number <= 20) {
          price *= 0.95;
        }
      }
      break;
    case 'Sunday':
      if (type === 'Students') {
        price = number * 10.46;
        if (number >= 30) {
          price *= 0.85;
        }
      } else if (type === 'Business') {
        if (number >= 100) {
          number -= 10;
        }
        price = number * 16;
      } else if (type === 'Regular') {
        price = number * 22.5;
        if (number >= 10 && number <= 20) {
          price *= 0.95;
        }
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40, 'Regular', 'Saturday');
