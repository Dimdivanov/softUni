function printNthElement(arr) {
  let n = Number(arr[arr.length - 1]);
  let print = [];
  for (let i = 0; i < arr.length - 1; i += n) {
    if (arr[i] !== undefined) {
      let num = arr[i];
      print.push(num);
    }
  }
  console.log(print.join(' '));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
