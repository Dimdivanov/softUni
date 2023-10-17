function searchForNum(arr1, arr2) {
  let [takeCount, deleteCount, targetNumber] = arr2;
  let modifiedArr = arr1.slice(0, takeCount);

  for (let i = 0; i < deleteCount; i++) {
    modifiedArr.shift();
  }

  let count = modifiedArr.filter((num) => num === targetNumber).length;

  console.log(`Number ${targetNumber} occurs ${count} times.`);
}
// searchForNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);
searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
