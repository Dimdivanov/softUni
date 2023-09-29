function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let j = arr.length - 1 - i;

    let bonus = arr[i];
    arr[i] = arr[j];
    arr[j] = bonus;
  }
  console.log(arr);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
