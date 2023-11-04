function pointValidation(arr) {
  let x1 = arr[0];
  let y1 = arr[1];
  let x2 = arr[2];
  let y2 = arr[3];

  let product = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  let distance1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  let distance2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));

  if (Number.isInteger(distance1)) {
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
  }

  if (Number.isInteger(distance2)) {
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
  }

  if (Number.isInteger(product)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
pointValidation([2, 1, 1, 1]);
