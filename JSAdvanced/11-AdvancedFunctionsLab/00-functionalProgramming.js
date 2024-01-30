//First-class Functions
//they can be treated like any other variable

//can be passed as an argument from another function:
function sayHello() {
  return 'Hello, ';
}
function greetings(helloMessage, name) {
  return helloMessage() + name;
}
console.log(greetings(sayHello, 'JavaScript!'));
//can be returned by another function:
function sayHello1() {
  return function () {
    console.log('Hello!');
  };
}
const sayIt = sayHello1();
sayIt();
//assigned as a value to variable:
const calculate = function (a, b) {
  return a + b;
};
console.log(calculate(2, 3));

//Higher order Functions
//take other functions as an ARGUMENT or RETURN a function as a result
const sayHello2 = function () {
  return function () {
    console.log('HelloLOL!');
  };
};
const myFunc = sayHello2();
myFunc();
