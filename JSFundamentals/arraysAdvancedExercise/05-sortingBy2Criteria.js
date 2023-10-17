function sortingByTwo(arr) {
  console.log(
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')
  );
}
sortingByTwo(['alpha', 'beta', 'gamma']);

// orders an array of strings, by their length in ascending order as primary criteria
// and by alphabetical value in ascending order as second criteria.
// The comparison should be case-insensitive.
