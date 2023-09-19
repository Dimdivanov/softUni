function catWalking(input) {
  let minWalk = Number(input[0]);
  let numWalks = Number(input[1]);
  let caloriesConsumed = Number(input[2]);

  let caloriesBurnedPerMin = 5;
  let burnedCals = minWalk * caloriesBurnedPerMin * numWalks;

  let halfCalsConsumed = caloriesConsumed / 2;
  if (burnedCals >= halfCalsConsumed) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${burnedCals}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${burnedCals}.`
    );
  }
}
catWalking(['15', '2', '500']);
