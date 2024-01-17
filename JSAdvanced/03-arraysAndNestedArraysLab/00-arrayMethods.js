function includes(inputArr, element) {
  for (let item of inputArr) {
    if (item === element) {
      return true;
    }
  }

  return false;
}

function indexOf(inputArr, element) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === element) {
      return i;
    }
  }

  return -1;
}

function slice(inputArr, start, end) {
  let result = [];

  if (start < 0) {
    start += inputArr.length;
  }
  if (end < 0) {
    end += inputArr.length;
  }

  for (let i = start; i < end; i++) {
    result[result.length] = inputArr[i];
  }

  return result;
}

function join(inputArr, str) {
  let result = '';

  for (let i = 0; i < inputArr.length - 1; i++) {
    result += String(inputArr[i]);
    result += str;
  }

  if (inputArr.length > 0) {
    result += inputArr[inputArr.length - 1];
  }

  return result;
}

function map(inputArr, operation) {
  let result = [];

  for (let item of inputArr) {
    let newItem = operation(item);
    result.push(newItem);
  }

  return result;
}

function filter(inputArr, predicate) {
  let result = [];

  for (let item of inputArr) {
    if (predicate(item)) {
      result.push(item);
    }
  }

  return result;
}

// BUBBLE SORT

function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (compare(arr[i], arr[i + 1])) {
        swap(arr, i, i + 1);
      }
    }
  }
}

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function compare(a, b) {
  return a > b;
}

// forEach() Method ============================

//-- executes a provided function once on each element in the array
//-- can't be stored in a variable - output will be : undefined
//-- can't stop the code with 'break' it will run until end of elements
//-- it doesn't create a new array but is useful for side effects, such as logging or updating external variables
let fruits = ['apple', 'banana', 'orange'];
fruits.forEach(function (element, index, array) {
  // element: current element being processed
  // index: index of the current element
  // array: the array forEach was called upon
  // console.log(element);
});
// Output:
// apple
// banana
// orange

// map() Method ============================

//-- creates a new array by applying a provided function to each element of the array
//-- you can store it in a variable - which will give the new array
//-- useful for transforming each element of an array

let numbers1 = [1, 2, 3, 4];

let squared = numbers1.map(function (element, index, array) {
  // element: current element being processed
  // index: index of the current element
  // array: the array map was called upon
  return element * element;
});
// console.log(squared);
// Output: [1, 4, 9, 16]

// some() Method ============================

//-- checks if at least one element in the array satisfies a provided condition
//-- it returns Boolean
let numbers2 = [1, 2, 3, 4];

let hasEven = numbers2.some(function (element, index, array) {
  // element: current element being processed
  // index: index of the current element
  // array: the array some was called upon
  return element % 2 === 0;
});
// console.log(hasEven);
// Output: true

// every()  Method ============================

//-- checks if all elements in the array satisfy a provided condition
//-- it returns Boolean
let numbers3 = [1, 2, 3, 4];

let allEven = numbers3.every(function (element, index, array) {
  // element: current element being processed
  // index: index of the current element
  // array: the array every was called upon
  return element % 2 === 0;
});
// console.log(allEven);
// Output: false

// find() Method ============================

//-- returns the first found value that satisfy the test function in the array otherwise = 'undefined'

let numbers6 = [1, 2, 3, 4];

let firstEven = numbers6.find(function (element, index, array) {
  // element: current element being processed
  // index: index of the current element
  // array: the array find was called upon
  return element % 2 === 0;
});
// console.log(firstEven);
// Output: 2

// filter() Method ============================

//-- creates a new array with filtered elements only that pass the test function
//-- if the element returns 'true' the element is included in the new array
let numbers7 = [1, 2, 3, 4, 5];

let evenNumbers = numbers7.filter(function (element, index, array) {
  // element: current element being processed
  // index: index of the current element
  // array: the array filter was called upon
  return element % 2 === 0;
});
// console.log(evenNumbers);
// Output: [2, 4]
