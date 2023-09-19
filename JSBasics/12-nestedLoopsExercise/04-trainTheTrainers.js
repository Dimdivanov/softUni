function trainTheTrainers(input) {
  let index = 0;

  let judgeCount = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let allgrades = 0;
  let gradesCount = 0;

  while (command !== 'Finish') {
    let presentation = command;
    let gradeSum = 0;

    for (let i = 0; i < judgeCount; i++) {
      let curGrade = Number(input[index]);
      index++;

      gradeSum += curGrade;
    }

    let averageGrade = gradeSum / judgeCount;
    console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);

    allgrades += averageGrade;
    gradesCount++;

    command = input[index];
    index++;
  }

  let totalAverage = allgrades / gradesCount;
  console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);
}
trainTheTrainers([
  '2',
  'While-Loop',
  '6.00',
  '5.50',
  'For-Loop',
  '5.84',
  '5.66',
  'Finish',
]);
