const sum = (a, b) => a + b;

const multiply = function (a, b) {
  return a * b;
};

function subtract(a, b) {
  return a - b;
}

//default export with Nodejs

exports.sum = sum;
exports.multiply = multiply;
exports.subtract = subtract;
