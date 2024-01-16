function printArray(arr, str) {
  let result = arr.join(`${str}`);
  console.log(result);
}
printArray(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
