function piccolo(arr) {
  let carData = {};

  for (let car of arr) {
    let [directions, carNumber] = car.split(', ');
    let numbers = Number(carNumber.slice(2, -2));

    if (directions === 'IN') {
      carData[carNumber] = numbers;
    } else if (directions === 'OUT') {
      delete carData[carNumber];
    }
    if (Object.keys(carData) == 0) {
      console.log('Parking Lot is Empty');
      return;
    }
  }

  let entries = Object.entries(carData).sort((a, b) => a[1] - b[1]);
  for (let carId of entries) {
    console.log(carId[0]);
  }
}
piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
