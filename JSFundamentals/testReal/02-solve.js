function solve(input) {
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let pattern = /(\|[A-Z]{4,}\|):(#[A-Za-z]+\ [A-Za-z]+#)/g;
    let curTitle = input[i];

    if (pattern.test(curTitle)) {
      let bossName = curTitle.match(/([A-Z]{4,})/g);
      let title = curTitle.match(/[A-Za-z]+\ [A-Za-z]+/g);

      console.log(
        `${bossName}, The ${title}\n>> Strength: ${bossName[0].length}\n>> Armor: ${title[0].length}`
      );
    } else {
      console.log('Access denied!');
    }
  }
}
solve([
  '3',
  '|PETER|:#Lead architect#',
  '|GEORGE|:#High Overseer#',
  '|ALEX|:#Assistant Game Developer#',
]);
