function paintingWalls(input) {
  let naylon = Number(input[0]);
  let paint = Number(input[1]);
  let paintDes = Number(input[2]);
  let hoursOfWork = Number(input[3]);

  let sumNaylon = (naylon + 2) * 1.5;
  let sumPaint = 1.1 * paint * 14.5;
  let sumDes = paintDes * 5;

  let sumMaterials = sumNaylon + sumPaint + sumDes + 0.4;
  let sumWork = 0.3 * sumMaterials * hoursOfWork;
  let sumAll = sumMaterials + sumWork;

  console.log(sumAll);
}
paintingWalls(['10 ', '11 ', '4 ', '8 ']);
paintingWalls(['5 ', '10 ', '10 ', '1 ']);
