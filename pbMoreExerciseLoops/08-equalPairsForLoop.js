function equalPairs(input) {
  let pairsExpected = Number(input[0]);

  let equalPairCheck = true;
  let maxDiff = 0;

  let prevPair = Number(input[1]) + Number(input[2]);

  for (let i = 1; i <= pairsExpected * 2; i++) {
    let num1 = Number(input[i + 1]);
    let num2 = Number(input[i + 2]);
    let pair = num1 + num2;

    if (pair !== prevPair) {
      equalPairCheck = false;
      let diff = Math.abs(pair - prevPair);
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }

    prevPair = pair;
  }
  if (equalPairs) {
    console.log(`Yes, value=${prevPair}`);
  } else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}
equalPairs(['2', '-1', '0', '0', '-1']);
