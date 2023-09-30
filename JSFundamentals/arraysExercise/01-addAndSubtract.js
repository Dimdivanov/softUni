function addAndSubtract(array) {
  let newArray = [];
  let before = 0;
  let after = 0;

  for (let i = 0; i < array.length; i++) {
    let curNum = array[i];
    before += curNum;

    if (curNum % 2 == 0) {
      newArray.push(curNum + i);
    } else {
      newArray.push(curNum - i);
    }
  }
  for (let elements of newArray) {
    after += elements;
  }
  console.log(newArray);
  console.log(before);
  console.log(after);
}
addAndSubtract([5, 15, 23, 56, 35]);
