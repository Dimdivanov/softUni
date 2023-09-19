function sumOfPrime(input) {
  let index = 0;

  let command = input[index];
  index++;

  let primeNumbers = 0;
  let nonPrimeNumbers = 0;

  while (command !== 'stop') {
    let currNum = Number(command);

    if (currNum < 0) {
      console.log('Number is negative.');
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;

    for (let divider = 2; divider < currNum; divider++) {
      if (currNum % divider === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers += currNum;
    } else {
      nonPrimeNumbers += currNum;
    }

    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${primeNumbers}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);
}
sumOfPrime(['30', '83', '33', '-1', '20', 'stop']);
