function treckMania(input) {
  let groupNumber = Number(input[0]);

  let groupMusala = 0;
  let groupMonblan = 0;
  let groupKili = 0;
  let groupK2 = 0;
  let groupEverest = 0;

  let sumOfAll = 0;

  for (let i = 1; i <= groupNumber; i++) {
    let groups = Number(input[i]);
    sumOfAll += Number(input[i]);

    if (groups <= 5) {
      groupMusala += Number(input[i]);
    } else if (groups >= 6 && groups <= 12) {
      groupMonblan += Number(input[i]);
    } else if (groups >= 13 && groups <= 25) {
      groupKili += Number(input[i]);
    } else if (groups >= 26 && groups <= 40) {
      groupK2 += Number(input[i]);
    } else {
      groupEverest += Number(input[i]);
    }
  }

  let percent1Cal = (groupMusala / sumOfAll) * 100;
  let percent2Cal = (groupMonblan / sumOfAll) * 100;
  let percent3Cal = (groupKili / sumOfAll) * 100;
  let percent4Cal = (groupK2 / sumOfAll) * 100;
  let percent5Cal = (groupEverest / sumOfAll) * 100;

  console.log(`${percent1Cal.toFixed(2)}%`);
  console.log(`${percent2Cal.toFixed(2)}%`);
  console.log(`${percent3Cal.toFixed(2)}%`);
  console.log(`${percent4Cal.toFixed(2)}%`);
  console.log(`${percent5Cal.toFixed(2)}%`);
}
treckMania(['5', '25', '41', '31', '250', '6']);
