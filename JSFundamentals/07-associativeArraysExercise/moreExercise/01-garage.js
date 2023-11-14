function garage(arr) {
  let storedCars = {};

  for (let garage of arr) {
    let [num, carInfos] = garage.split(' - ');
    num = Number(num);

    if (!storedCars.hasOwnProperty(num)) {
      storedCars[num] = [];
    }

    let carDetails = carInfos.split(', ');

    let car = {};

    for (let detail of carDetails) {
      let [key, value] = detail.split(': ');
      car[key] = value;
    }

    storedCars[num].push(car);
  }
  let entries = Object.entries(storedCars);
  for (let [nums, cars] of entries) {
    console.log(`Garage № ${nums}`);
    for (let car of cars) {
      let carDetails = Object.entries(car);
      let detailString = carDetails
        .map(([key, value]) => `${key} - ${value}`)
        .join(', ');
      console.log(`--- ${detailString}`);
    }
  }
}

garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);
