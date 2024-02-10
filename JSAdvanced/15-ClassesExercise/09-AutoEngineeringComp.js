function autoEngineCompany(arr) {
  let carObj = {};
  for (let carInfo of arr) {
    let [car, model, quant] = carInfo.split(' | ');
    quant = Number(quant);
    if (!(car in carObj)) {
      carObj[car] = {};
    }
    if (!(model in carObj[car])) {
      carObj[car][model] = quant;
    } else {
      carObj[car][model] += quant;
    }
  }
  let entries = Object.entries(carObj);
  for (let [carBrand, cars] of entries) {
    console.log(`${carBrand}`);
    let carEntries = Object.entries(cars);
    for (let [model, quant] of carEntries) {
      console.log(`###${model} -> ${quant}`);
    }
  }
}
autoEngineCompany([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);

//   let entries = Object.entries(carObj);
//   for (let [carBrand, carsArr] of entries) {
//     console.log(`${carBrand}`);
//     for (let i = 0; i < carsArr.length; i += 2) {
//       let carModel = carsArr[i];
//       let producedCars = carsArr[i + 1];
//       console.log(`###${carModel} -> ${producedCars}`);
//     }
//   }
