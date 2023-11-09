function piccolo(arr) {
  let parkedCars = [];
  for (let car of arr) {
    let [directions, carNumber] = car.split(', ');
    if (directions == 'IN' && !parkedCars.includes(carNumber)) {
      parkedCars.push(carNumber);
    } else if (directions == 'OUT' && parkedCars.includes(carNumber)) {
      parkedCars.splice(parkedCars.indexOf(carNumber), 1);
    }
  }
  if (!parkedCars.length == 0) {
    parkedCars.sort();
    console.log(parkedCars.join('\n'));
  } else {
    console.log('Parking Lot is Empty');
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
