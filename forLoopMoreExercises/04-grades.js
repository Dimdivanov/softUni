function grades(input) {
  let studentsExam = Number(input[0]);

  let topStudents = 0;
  let average4 = 0;
  let bad3 = 0;
  let failed = 0;

  let allGrades = 0;
  for (let i = 1; i <= studentsExam; i++) {
    let grade = Number(input[i]);

    if (grade >= 5) {
      topStudents++;
    } else if (grade <= 4.99 && grade >= 4) {
      average4++;
    } else if (grade <= 3.99 && grade >= 3) {
      bad3++;
    } else if (grade < 3) {
      failed++;
    }

    allGrades += grade;
  }

  let averageGrade = allGrades / studentsExam;

  let topStudentsPercent = (topStudents / studentsExam) * 100;
  let average4Percent = (average4 / studentsExam) * 100;
  let bad3Percent = (bad3 / studentsExam) * 100;
  let failedPercent = (failed / studentsExam) * 100;

  console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${average4Percent.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${bad3Percent.toFixed(2)}%`);
  console.log(`Fail: ${failedPercent.toFixed(2)}%`);
  console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades([
  '10',
  '3.00',
  '2.99',
  '5.68',
  '3.01',
  '4',
  '4',
  '6.00',
  '4.50',
  '2.44',
  '5',
]);
