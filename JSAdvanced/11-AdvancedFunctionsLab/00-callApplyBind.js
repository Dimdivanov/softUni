//call()
function sayHello(subject, grade) {
  console.log(this.name + ' says hi!');
  console.log(this.name + ' received a ' + grade + ' at ' + subject);
}
sayHello('math', 5); //undefined
console.log('==== call()');
console.log('==== Приема обекта(this), и другите параметри изброени ====');

const myObj = {
  name: 'Peter',
};
const mySecondObj = {
  name: 'Ivan',
};
sayHello.call(myObj, 'biology', 6);
console.log('==== apply()');
console.log('==== Приема обекта(this), и масив от параметрите ====');
//apply()
sayHello.apply(mySecondObj, ['geography', 5]);
//често срещано приложение на apply е:
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6])); //6

console.log('==== bind()');
console.log(
  '==== запазваме в променлива и приема обекта(this), и прави прозрачна опаковка ===='
);
//bind()
//задава контекст на функцията и я изпълняваме по-нататък
//няма да изпълни функцията прави копие
const boundFn = sayHello.bind(mySecondObj);
boundFn('art', 4);
//ако искаме в опаковката да запазим и параметрите можем да направим така
const boundFn1 = sayHello.bind(mySecondObj, 'art');
boundFn1(6);
// behind the work of bind():
// const boundFnn = function () {
//   sayHello.call(mySecondObj, 'art', 4);
// };
// boundFnn();
