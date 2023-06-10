function examPreparation(input) {
  let index = 0;

  let maxBadGrades = Number(input[index]);
  index++;

  let problemName = input[index];
  index++;

  let problemGrade = Number(input[index]);
  index++;

  let badGradesCount = 0;
  let allGrades = 0; // сумата на всички оценки
  let allGradesCount = 0;
  let allProblems = 0;
  let currentProblem = '';

  while (problemName !== 'Enough') {
    currentProblem = problemName;
    if (problemGrade <= 4) {
      badGradesCount++; //ако е <= 4 адваме към лоши оценки
    }
    if (badGradesCount === maxBadGrades) {
      //ако стигне Мартин слабите оценки го пращаме на почивка
      break;
    }
    allGrades += problemGrade; //адваме към сумата на всички оценки
    allGradesCount++;
    allProblems++;

    problemName = input[index];
    index++;

    problemGrade = Number(input[index]);
    index++;
  }

  if (problemName === 'Enough') {
    let averageGrade = allGrades / allGradesCount;
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${allProblems}`);
    console.log(`Last problem: ${currentProblem}`);
  } else {
    console.log(`You need a break, ${badGradesCount} poor grades.`);
  }
}
examPreparation(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4']);
