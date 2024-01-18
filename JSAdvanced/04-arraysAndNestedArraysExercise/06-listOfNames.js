function listOfNames(arr) {
  let sorted = arr.sort((a, b) => a.localeCompare(b));
  sorted.forEach(function (element, index) {
    console.log(index + 1 + '.' + element);
  });
}
listOfNames(['John', 'Bob', 'Christina', 'Ema']);
