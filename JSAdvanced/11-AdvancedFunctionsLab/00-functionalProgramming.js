//First-class Functions
//they can be treated like any other variable

//can be passed as an ARGUMENT from another function:
function sayHello() {
  return 'Hello, ';
}
function greetings(helloMessage, name) {
  return helloMessage() + name;
}
console.log(greetings(sayHello, 'JavaScript!'));

//can be RETURNED by another function:
function sayHello1() {
  return function () {
    console.log('Hello!');
  };
}
const sayIt = sayHello1();
sayIt();
//assigned as a VALUE to variable:
const calculate = function (a, b) {
  return a + b;
};
console.log(calculate(2, 3));

//= Higher order function- take other functions as an ARGUMENT or RETURN a function as a result
//example 1: Function as argument
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}
function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
console.log(operateOnNumbers(20, 30, add));
console.log(operateOnNumbers(20, 30, multiply));

//example 2: Function as result
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(4));

//=Built-in higher order functions - map, filter, reduce;
const higherOrder = function () {
  return function () {
    console.log('This is higher Order func!');
  };
};
const order = higherOrder();
order(); // Hello!

//= Predicates - any function that returns bool based evaluation of truth of an assertion
//== often found in the form of callbacks
//=== функция която ще върне true или false - filter или find

//=Pure Functions
//== pure functions are functions that always will return the same result with same parameters
//== value shouldnt have side effects

//PURE
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); //5
console.log('======');

//IMPURE
let a = 2;
function add1(b) {
  return a + b;
}
console.log(add1(3)); //5
a = 3; //changing the variable will change the outcome
console.log(add1(3)); //6
//IIFE - legacy
(function () {
  let name = 'Petercho';
  console.log(name);
})();

//Partial application can be achieved with bind() or with closure
//creating a new function by fixating some of the arguments of an existing function
//създаваме нова фунцкия от друга фунцкия с фиксиран аргумент
function add(a, b, c) {
  return a + b + c;
}
const binded = add.bind(null, 5);
console.log(binded(2, 3));

//closure example
function multiplyAgain(a, b, c) {
  return a * b * c;
}
function partialMultiply(a) {
  return function (b, c) {
    return multiplyAgain(a, b, c);
  };
}
const multiplyBy2 = partialMultiply(2);
const result = multiplyBy2(2, 3);
console.log(result);
