// // // rest operator - the rest of elements '...'
// // // spread operator - same as rest '...'

// // function solve(...params) {
// //   // ... is always rest or when destructuring object
// //   let largest = Math.max(...params); // ... here is spread
// //   console.log(largest);
// // }
// // solve(7, 11, 3);

// // [1, 2].map();

// let arr = [10, 20, 30, 40, 50];
// let arr1 = [11, 22, 33, 44, 55];
// let arr2 = [12, 23, 34, 45, 56];

// let fullArr = arr.concat(arr1, arr2);
// console.log(fullArr);

var numbers = [1, 2, 3, 4];

var result = numbers.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  // Log the values for illustration purposes

  // Perform some operation, for example, multiplying the elements with their index
  return accumulator + currentValue;
},
0);

console.log(result); // Outputs: 14 (0 + 2*1 + 3*2 + 4*3)
