// Manipulation
// .indexOf(substring) - gives index of the searched string
let text = 'I am JavaScript developer';
console.log(text.indexOf('Java')); // output: 5
console.log(text.indexOf('java')); // output: -1
console.log(text.indexOf('Java', 4)); // 4 is the index it will start looking for similar substring
// Extracting substrings
// .substring(starting index, ending index)
let str = 'Hello world';
let sub = str.substring(1, 5);
console.log(sub);
// String Operation
// .replace(search, replacement)
let webText = 'SoftUni.bg';
let replaced = webText.replace('.bg', '.com');
console.log(replaced);
// Splitting and finding
// .split(operator)
let text1 = 'I love fruits';
let wordSplits = text1.split(' love '); // we can split by a word
console.log(wordSplits);
// .includes(substring)
let text2 = 'I love fruits';
console.log(text2.includes('fruits')); //output: true (only true/false)
// .repeat(count) - creates a new string repeated count times
let names = 'Dimitar ';
console.log(names.repeat(2));
