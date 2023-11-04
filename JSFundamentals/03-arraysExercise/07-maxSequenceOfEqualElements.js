function maxSeq(arr) {
  let longestSeq = [];

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let curSeq = [curNum];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];

      if (curNum === nextNum) {
        curSeq.push(nextNum);
      } else {
        break;
      }
    }
    if (curSeq.length > longestSeq.length) {
      longestSeq = curSeq;
    }
  }
  console.log(longestSeq.join(' '));
}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
