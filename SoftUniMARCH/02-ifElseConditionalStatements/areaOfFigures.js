function areaOfFigures(input) {
  let shape = input[0];

  if (shape === 'square') {
    let num = Number(input[1]);
    result = num * num;
  } else if (shape === 'rectangle') {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    result = sideA * sideB;
  } else if (shape === 'circle') {
    let r = Number(input[1]);
    result = Math.PI * (r * r);
  } else {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    result = (sideA * sideB) / 2;
  }
  console.log(result.toFixed(3));
}

areaOfFigures(['circle', '6']);
