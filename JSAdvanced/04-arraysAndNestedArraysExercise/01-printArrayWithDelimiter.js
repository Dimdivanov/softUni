function printArray(arr, str) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  console.log(result.join(`${str}`));
}
printArray(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
