function histogram(input) {
  let n = Number(input[0]);

  let range1Count = 0;
  let range2Count = 0;
  let range3Count = 0;
  let range4Count = 0;
  let range5Count = 0;

  for (let i = 1; i <= n; i++) {
    let nNum = Number(input[i]);

    if (nNum < 200) {
      range1Count++;
    } else if (nNum <= 399) {
      range2Count++;
    } else if (nNum <= 599) {
      range3Count++;
    } else if (nNum <= 799) {
      range4Count++;
    } else {
      range5Count++;
    }
  }

  let percent1Count = (range1Count / n) * 100;
  let percent2Count = (range2Count / n) * 100;
  let percent3Count = (range3Count / n) * 100;
  let percent4Count = (range4Count / n) * 100;
  let percent5Count = (range5Count / n) * 100;

  console.log(`${percent1Count.toFixed(2)}%`);
  console.log(`${percent2Count.toFixed(2)}%`);
  console.log(`${percent3Count.toFixed(2)}%`);
  console.log(`${percent4Count.toFixed(2)}%`);
  console.log(`${percent5Count.toFixed(2)}%`);
}
histogram([
  '14',
  '53',
  '7',
  '56',
  '180',
  '450',
  '920',
  '12',
  '7',
  '150',
  '250',
  '680',
  '2',
  '600',
  '200',
]);
