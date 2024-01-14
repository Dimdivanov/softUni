function checkDistanceValidity(x1, y1, x2, y2) {
  let caseOne = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
  let caseTwo = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
  let caseThree = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (Number.isInteger(caseOne)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is ${'valid'}`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is ${'invalid'}`);
  }
  if (Number.isInteger(caseTwo)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is ${'valid'}`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is ${'invalid'}`);
  }
  if (Number.isInteger(caseThree)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${'valid'}`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${'invalid'}`);
  }
}
// checkDistanceValidity(3, 0, 0, 4);
checkDistanceValidity(2, 1, 1, 1);
