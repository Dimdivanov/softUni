function sumOfTwoNums(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);

  let combinationCounter = 0;
  let isValid = false;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combinationCounter++;
      let result = i + j;

      if (result === magicNum) {
        console.log(
          `Combination N:${combinationCounter} (${i} + ${j} = ${magicNum})`
        );
        isValid = true;
        break;
      }
    }
    if (isValid) {
      break;
    }
  }
  if (!isValid) {
    console.log(
      `${combinationCounter} combinations - neither equals ${magicNum}`
    );
  }
}
sumOfTwoNums(['88', '888', '2000']);
