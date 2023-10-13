// Взима елемента и го бута в края на масива
// Удължава масива
// Със запетайка може да вкараме над 1 елемент

function pushMethod(arr) {
  arr.push(60, 70);
  console.log(arr, arr.length);
}
pushMethod([10, 20, 30, 40, 50]);

// Маха последния елемент от масива
// Намалява масива
// Връща като резултат елемента, който сме махнали (в променлива)

function popMethod(arr) {
  let popHolder = arr.pop();

  console.log(arr, arr.length);

  console.log(popHolder);
}
popMethod([10, 20, 30, 40, 50]);

// Добавя елемент в началото на масива
// Удължава масива
// Със запетайка може да вкараме над 1 елемент в последователност на вписването

function unshiftMethod(arr) {
  arr.unshift(5, 6, 7);
  console.log(arr, arr.length);
}
unshiftMethod([10, 20, 30, 40, 50]);

// Маха елемент от началото
// Намаля масива
// Връща като резултат елемента, който сме махнали (в променлива)

function shiftMethod(arr) {
  let shifted = arr.shift();
  console.log(arr, arr.length, shifted);
}
shiftMethod([10, 20, 30, 40, 50]);

//ОПЕРАЦИИ ЗА ТЪРСЕНЕ:
// проверява за дадена стойност дали е в масива
// дава булева стойност true или false (да / не)
function includesMethod(arr) {
  let num = arr.includes(20) && arr.includes(60);
  console.log(num);
}
includesMethod([10, 20, 30, 40, 50]);

// ще ни каже къде в масива и на кой index се намира търсения елемент
// ако елемента го няма ще ни даде резултат "-1"
// можем да го запазим в променлива

function indexOfMethod(arr) {
  let num = arr.indexOf(60);
  console.log(num);
}
indexOfMethod([10, 20, 30, 40, 50]);

//
