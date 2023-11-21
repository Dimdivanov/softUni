function race(arr) {
  let racerNames = arr.shift().split(', ');

  let patternNames = /[A-Za-z]/g;
  let patternDistance = /\d/g;

  let results = {};
  racerNames.forEach((racerNames) => (results[racerNames] = 0)); //вкарваме всеки елемент от масива в обекта и слагаме стойност 0;

  let command = arr.shift();
  while (command !== 'end of race') {
    let matching = command.match(patternNames);
    let name = matching.join('');

    let digitMatches = command.match(patternDistance);
    let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);

    if (name in results) {
      results[name] += distance;
    }

    command = arr.shift();
  }

  let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sortedResults[0][0]}`);
  console.log(`2nd place: ${sortedResults[1][0]}`);
  console.log(`3rd place: ${sortedResults[2][0]}`);
}
race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);
