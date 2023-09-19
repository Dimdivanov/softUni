function walking(input) {
  let index = 0;
  let goal = 10000;
  let stepsCounter = 0;

  let steps = input[index];
  index++;

  while (steps !== 'Going home') {
    steps = Number(steps);
    stepsCounter += steps;

    if (stepsCounter >= goal) {
      break;
    }

    steps = input[index];
    index++;
  }

  if (steps === 'Going home') {
    let stepsToHome = Number(input[index]);
    stepsCounter += stepsToHome;

    if (stepsCounter >= goal) {
      console.log('Goal reached! Good job!');
      console.log(`${stepsCounter - goal} steps over the goal!`);
    } else {
      console.log(`${goal - stepsCounter} more steps to reach goal.`);
    }
  } else {
    console.log('Goal reached! Good job!');
    console.log(`${stepsCounter - goal} steps over the goal!`);
  }
}
walking(['125', '250', '4000', '30', '2678', '4682']);
