function sumEvenNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    //парснахме с фор лууп от array(стринг) на array(цифри)
    arr[i] = Number(arr[i]);
  }
  let sum = 0;

  for (let num of arr) {
    //фор оф преглеждаме всеки елемент/число и ако е четно прибаваме
    if (num % 2 === 0) {
      sum += num;
    }
  }
  console.log(sum);
}
sumEvenNums(['1', '2', '3', '4', '5', '6']);
