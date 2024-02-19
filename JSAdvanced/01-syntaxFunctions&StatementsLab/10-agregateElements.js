function agregate(arr) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = '';
  for (let i = 0; i < arr.length; i++) {
    sum1 += Number(arr[i]);
    sum2 += 1 / Number(arr[i]);
    sum3 += arr[i];
  }
  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
}
agregate([1, 2, 3]);
