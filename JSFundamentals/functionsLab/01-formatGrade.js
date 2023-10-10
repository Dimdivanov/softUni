function formatGrade(grade) {
  if (grade < 3) {
    grade = 2;
  }
  if (grade < 3.0) {
    console.log(`Fail (${grade})`);
  } else if (grade >= 3.0 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}
formatGrade(2.99);
