function sortByTwoCriteria(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(arr.join('\n'));
}
// sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortByTwoCriteria(['Deny', 'omen', 'test', 'Default']);
