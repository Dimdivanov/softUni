function sameNumbers(num) {
  let isSame = true;
  let sum = 0;
  let arrOfNum = num
    .toString()
    .split('')
    .map((element, index, arr) => {
      if (element !== arr[0]) {
        isSame = false;
      }
      return (sum += Number(element));
    });
  console.log(isSame);
  console.log(sum);
}
sameNumbers(1234);
sameNumbers(2222222);
