function distinctArr(arr) {
  let newArr = [];

  for (let number of arr) {
    if (!newArr.includes(number)) {
      //АКО НЕ ВКЛЮЧВА текущото число тогава го PUSH
      newArr.push(number);
    }
  }
  console.log(newArr.join(' '));
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);

// проверява за еднакви числа в масива
