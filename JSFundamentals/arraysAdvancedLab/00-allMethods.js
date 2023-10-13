// Взима елемента и го бута в края на масива
// Удължава масива
// Със запетайка може да вкараме над 1 елемент
function pushMethod(arr) {
  arr.push(60, 70);
  console.log(arr);
  console.log(arr.length);
}
pushMethod([10, 20, 30, 40, 50]);

// Маха последния елемент от масива
// Намалява масива
// Връща като резултат елемента, който сме махнали
function popMethod(arr) {
  let popHolder = arr.pop();

  console.log(arr);
  console.log(arr.length);
  console.log(popHolder);
}
popMethod([10, 20, 30, 40, 50]);

// Добавя елемент в началото на масива
// Удължава масива

function unshiftMethod(arr) {
  arr.unshift(5);
  console.log(arr);
  console.log(arr.length);
}
unshiftMethod([10, 20, 30, 40, 50]);

// Маха елемент от началото
// Намаля масива

function shiftMethod(arr) {
  arr.shift();
  console.log(arr);
  console.log(arr.length);
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

//ще ни каже къде в масива и на кой index се намира търсения елемент

function indexOfMethod(arr) {
  let num = arr.indexOf(20);
  console.log(num);
}
indexOfMethod([10, 20, 30, 40, 50]);
