function pointValidation(array) {
  let validPoints = (a, b, c, d) => {
    let product = Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2));

    console.log(
      `{${a}, ${b}} to {${c}, ${d}} is ${
        Number.isInteger(product) ? 'valid' : 'invalid'
      }`
    );
  };
  validPoints(array[0], array[1], 0, 0);
  validPoints(array[2], array[3], 0, 0);
  validPoints(array[0], array[1], array[2], array[3]);
}
pointValidation([3, 0, 0, 4]);
