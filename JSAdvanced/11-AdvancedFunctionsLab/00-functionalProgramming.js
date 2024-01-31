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

//Както наричаме функциите в обектите(методи) така и тук:
//= Higher order function- take other functions as an ARGUMENT or RETURN a function as a result
const sayHello2 = function () {
  return function () {
    console.log('HelloLOL!');
  };
};
const myFunc = sayHello2();
myFunc();
//= Predicates - any function that returns bool based evaluation of truth of an assertion
//== often found in the form of callbacks
//=== функция която ще върне true или false - filter или find

//=Built-in higher order functions - map, filter, reduce;

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
