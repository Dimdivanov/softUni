function bombNumbers(arr1, arr2) {
  let specialBombNum = arr2[0];
  let sequenceOfNum = arr2[1];

  while (arr1.includes(specialBombNum)) {
    let index = arr1.indexOf(specialBombNum);
    let leftside = index - sequenceOfNum;
    arr1.splice(Math.max(0, leftside), sequenceOfNum * 2 + 1, 0); // math.max за да не слезем на по долен индекс (undefined)
  }
  let sumOfAll = 0;

  for (let el of arr1) {
    sumOfAll += el;
  }
  console.log(sumOfAll);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

// махаме число на даден индекс и няколко в ляво и няколко в дясно
// като бомберман;
