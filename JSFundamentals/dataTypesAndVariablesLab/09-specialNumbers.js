function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let curNum = Number(i);

    let firstDig = parseInt(curNum % 10);
    let lastDigit = parseInt(curNum / 10);
    let combo = firstDig + lastDigit;

    if (curNum == 5 || curNum == 7) {
      console.log(`${curNum} -> True`);
    } else if (combo === 5 || combo == 7 || combo == 11) {
      console.log(`${curNum} -> True`);
    } else {
      console.log(`${curNum} -> False`);
    }
  }
}
specialNumbers(56);
