function oddOccurrences(arr) {
  let words = arr.toLowerCase().split(' ');

  let object = {};

  for (let word of words) {
    if (object[word] !== undefined) {
      object[word] += 1;
    } else {
      object[word] = 1;
    }
  }
  let oddWords = Object.keys(object).filter((word) => object[word] % 2 !== 0);

  console.log(oddWords.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
