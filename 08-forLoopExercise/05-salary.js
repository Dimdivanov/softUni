function salary(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 2; i < tabs + 2; i++) {
    let n = input[i];
    if (n === 'Facebook') {
      salary -= 150;
    } else if (n === 'Instagram') {
      salary -= 100;
    } else if (n === 'Reddit') {
      salary -= 50;
    }
  }
  if (salary <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(`${salary}`);
  }
}
salary(['3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg']);
