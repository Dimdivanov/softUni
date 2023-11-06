function oddOccurrences(arr) {
  let words = arr.split(' ');
  let object = {};

  for (let i = 0; i < words.length; i++) {
    let curElement = words[i];
    console.log(curElement);
  }
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
