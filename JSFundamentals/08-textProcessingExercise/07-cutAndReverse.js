function cutAndReverse(str) {
  let result = str.split('').reverse().join('');
  let fistHalf = result.substring(0, str.length / 2);
  let secondHalf = result.substring(str.length / 2);
  console.log(secondHalf);
  console.log(fistHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
