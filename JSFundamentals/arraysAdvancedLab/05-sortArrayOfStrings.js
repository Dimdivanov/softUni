function arrOfStrings(arr) {
  let sortedArray = arr.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  console.log(sortedArray.join('\n'));
}
arrOfStrings(['alpha', 'beta', 'gamma']);
