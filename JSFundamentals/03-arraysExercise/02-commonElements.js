function commonElements(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let curElement = arr1[i];

    for (let el of arr2) {
      if (curElement === el) {
        console.log(curElement);
      }
    }
  }
}
commonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);
