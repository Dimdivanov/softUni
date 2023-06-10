function travelAgency(input) {
  let destination = input[0];
  let packageType = input[1];
  let statusVIP = input[2];
  let daysNum = Number(input[3]);

  let price = 0;

  if (daysNum <= 0) {
    console.log('Days must be positive number!');
  }

  if (destination === 'Bansko' || destination === 'Borovets') {
    if (packageType === 'withEquipment') {
      price = daysNum * 100;
      if (statusVIP === 'yes') {
        price *= 0.9;
      }
    } else {
      price = daysNum * 80;
      if (statusVIP === 'yes') {
        price *= 0.95;
      }
    }
  }

  if (destination === 'Varna' || destination === 'Burgas') {
    if (packageType === 'withBreakfast') {
      price = daysNum * 130;
      if (statusVIP === 'yes') {
        price *= 0.88;
      }
    } else {
      price = daysNum * 100;
      if (statusVIP === 'yes') {
        price *= 0.93;
      }
    }
  }
}
travelAgency(['dasdas', 'noEquipment', 'yes', '6']);
