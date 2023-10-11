function numModification(number) {
  let stringNum = String(number);
  let changedNumber = 0; //сбора на числата 1+0+1
  for (let i = 0; i < stringNum.length; i++) {
    let curNum = Number(stringNum[i]);
    changedNumber += curNum;
  }
  let averageNum = changedNumber / stringNum.length; //средно число изчислено 0.66666
}
numModification(101);
