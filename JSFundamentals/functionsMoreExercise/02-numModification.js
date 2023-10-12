function numModification(num) {
  let appendedNum = String(num);
  let average = 0;

  while (average <= 5) {
    let sum = 0;

    for (let i = 0; i < appendedNum.length; i++) {
      let curNum = Number(appendedNum[i]);
      sum += curNum;
    }

    average = sum / appendedNum.length;

    if (average <= 5) {
      appendedNum += 9;
    }
  }
  console.log(appendedNum);
}
numModification(5835);
