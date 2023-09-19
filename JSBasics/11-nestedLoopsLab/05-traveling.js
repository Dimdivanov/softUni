function traveling(input) {
  let index = 0;

  let row = input[index];

  while (row !== 'End') {
    let destination = row;

    index++;
    let budget = Number(input[index]);

    let sum = 0;

    while (sum < budget) {
      index++;
      let curSum = Number(input[index]);
      sum += curSum;
    }

    console.log(`Going to ${destination}!`);
    index++;
    row = input[index];
  }
}
traveling([
  'Greece',
  '1000',
  '200',
  '200',
  '300',
  '100',
  '150',
  '240',
  'Spain',
  '1200',
  '300',
  '500',
  '193',
  '423',
  'End',
]);
