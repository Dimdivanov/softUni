function trekkingMania(input) {
  let numGroups = Number(input[0]);

  let grp1 = 0;
  let grp2 = 0;
  let grp3 = 0;
  let grp4 = 0;
  let grp5 = 0;

  let sumOfAll = 0;

  for (let i = 1; i <= numGroups; i++) {
    let numPeople = Number(input[i]);
    sumOfAll += Number(input[i]);

    if (numPeople <= 5) {
      grp1 += Number(input[i]);
    } else if (numPeople <= 12) {
      grp2 += Number(input[i]);
    } else if (numPeople <= 25) {
      grp3 += Number(input[i]);
    } else if (numPeople <= 40) {
      grp4 += Number(input[i]);
    } else {
      grp5 += Number(input[i]);
    }
  }

  let p1 = (grp1 / sumOfAll) * 100;
  let p2 = (grp2 / sumOfAll) * 100;
  let p3 = (grp3 / sumOfAll) * 100;
  let p4 = (grp4 / sumOfAll) * 100;
  let p5 = (grp5 / sumOfAll) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
trekkingMania([
  '10',
  '10',
  '5',
  '1',
  '100',
  '12',
  '26',
  '17',
  '37',
  '40',
  '78',
]);
