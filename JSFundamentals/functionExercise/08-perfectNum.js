function perfectNum(num) {
  let sumOfDivisors = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sumOfDivisors += i;
    }
  }
  if (sumOfDivisors == num) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNum(312312312);
