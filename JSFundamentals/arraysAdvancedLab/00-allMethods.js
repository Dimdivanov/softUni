console.log('PushMethod =============================================');
// Взима елемента и го бута в края на масива
// Удължава масива
// Със запетайка може да вкараме над 1 елемент
function pushMethod(arr) {
  arr.push(60, 70);
  console.log(arr, arr.length);
}
pushMethod([10, 20, 30, 40, 50]);

console.log('popMethod =============================================');
// Маха последния елемент от масива
// Намалява масива
// можем да го запазим в променлива

function popMethod(arr) {
  let popHolder = arr.pop();

  console.log(arr, arr.length);

  console.log(popHolder);
}
popMethod([10, 20, 30, 40, 50]);

console.log('unshiftMethod =============================================');
// Добавя елемент в началото на масива
// Удължава масива
// Със запетайка може да вкараме над 1 елемент в последователност на вписването
function unshiftMethod(arr) {
  arr.unshift(5, 6, 7);
  console.log(arr, arr.length);
}
unshiftMethod([10, 20, 30, 40, 50]);
console.log('shiftMethod =============================================');
// Маха елемент от началото
// Намаля масива
// можем да го запазим в променлива

function shiftMethod(arr) {
  let shifted = arr.shift();
  console.log(arr, arr.length, shifted);
}
shiftMethod([10, 20, 30, 40, 50]);

console.log('Операции за търсене');
//============================
// Операции за търсене:
console.log('includesMethod =============================================');
// проверява за дадена стойност дали е в масива
// дава булева стойност true или false (да / не)
function includesMethod(arr) {
  let num = arr.includes(20) && arr.includes(60);
  console.log(num);
}
includesMethod([10, 20, 30, 40, 50]);

console.log('indexOfMethod =============================================');

// ще ни каже къде в масива и на кой index се намира търсения елемент
// ако елемента го няма ще ни даде резултат "-1"
// можем да го запазим в променлива
function indexOfMethod(arr) {
  let num = arr.indexOf(60);
  console.log(num);
}
indexOfMethod([10, 20, 30, 40, 50]);

console.log('Манипулиращи масива');
//============================
// Манипулиране на масив:

console.log('sliceMethod ============================================');
// Slice няма да изтрие елементите от масива, той ги копира .slice() - ще копира целия масив
// подаваме 2 параметъра в slice(start, end) last index (excluded - без него)
// ако подадем само 1 параметър arr.slice(1) ще вземе всички останали елементи
// ако подадем отрицетелен параметър ще почне да взима от дясно наляво
// можем да го запазим в променлива
function sliceMethod(arr) {
  console.log(arr);
  let sliced = arr.slice(1, 3); //1-включително, 3-преди трети индекс
  console.log(sliced);
}
sliceMethod([10, 20, 30, 40, 50]);

console.log('spliceMethod ============================================');
// Splice добавяне или изтриване на елементи в масив
// приема 3 параметъра ('старт' включително, 'delete count - колко да трие' и 'element to add')
// променя масива , но ни връща изрязаното и можем да го запазим в променлива

function spliceMethod(arr) {
  let spliceAdd = arr.splice(3, 1, 45); // на самия елемент почни от там вкарай и избутва останалите стойности
  console.log(spliceAdd);
}
spliceMethod([10, 20, 30, 40, 50]);

console.log('mapMethod ============================================');
// взима елементите на даден масив, прави нов масив и apply-ва функция на всеки елемент
// оригиналния масив не се губи (трансформирано копие на масива)
function mapMethod(arr) {
  console.log(arr);
  console.log(arr.map((x) => x + 1));
}
mapMethod([10, 20, 30, 40, 50]);

console.log('filterMethod ============================================');
// прави нов масив от еднакви елементи филтрира
// ако е true / false вземи дадения елемент и го сложи в новия масив
// predicate - булева функция
function filterMethod(arr) {
  console.log(arr);
  console.log(arr.filter((x) => x.length > 1));
}
filterMethod(['10', 20, 30, '40', 50]);

console.log('sortMethod ============================================');
// сортира масива по даден критерий
// сравнява 2 елемента (положително, отрицателно или нула по стойности)
function sortMethod(arr) {
  arr.sort(compare);
  arr.sort((a, b) => a - b);

  console.log(arr);
  function compare(a, b) {
    return a - b;
  }
}
sortMethod([3, 5, 1, 7, 0, 11]);

console.log('localeCompare ============================================');
// сортиране по азбучен ред по ascii код
// ползва се върху стринговите функции
function localeCompare(arr) {
  let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
  words.sort((a, b) => a.localeCompare(b));
  console.log(words);
}
localeCompare(['nest', 'Eggs', 'bite', 'Grip', 'jAw']);
