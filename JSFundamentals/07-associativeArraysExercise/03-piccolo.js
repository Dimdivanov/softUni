function piccolo(arr) {
  let carData = [];

  for (let car of arr) {
    let [status, carId] = car.split(', ');
    if (status === 'IN') {
      carData.push(carId);
    } else {
      let index = carData.indexOf(carId);
      carData.splice(index, 1);
    }
    if (carData.length == 0) {
      console.log('Parking Lot is Empty');
    }
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
// piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
