// Manipulation
// .indexOf(substring) - gives index of the searched string
let text = 'I am JavaScript developer';
console.log(text.indexOf('Java')); // output: 5
console.log(text.indexOf('java')); // output: -1
console.log(text.indexOf('Java', 4)); // 4 is the index it will start looking for similar substring
// =========================================
// EXTRACTING SUBSTRINGS
// .substring(starting index, ending index)
let str = 'Hello world';
let sub = str.substring(2, 5);
console.log(sub);
// =========================================
// STRING OPERATIONS
// .replace(search, replacement)
let webText = 'SoftUni.bg';
let replaced = webText.replace('.bg', '.com');
console.log(replaced);
// SPLITTING AND FINDING
// .split(operator)
let text1 = 'I love fruits';
let wordSplits = text1.split(' love '); // we can split by a word
console.log(wordSplits);
// .includes(substring)
let text2 = 'I love fruits';
console.log(text2.includes('fruits')); //output: true (only true/false)
// =========================================
// .repeat(count) - creates a new string repeated count times
let names = 'Dimitar ';
console.log(names.repeat(2));
// =========================================
// TRIMMING STRINGS
// trim() , trimStar() , trimEnd() - removes whitespaces only
let word1 = '  -Hey-  ';
let trimWord = word1.trim();
console.log(trimWord);
// =========================================
// STARTS WITH ENDS WITH
// startsWith('hello') , endsWith('world') - true / false
let word4 = 'hello World';
let startsWith = word4.startsWith('hello');
console.log(startsWith);
// =========================================
// PADDING at the start / end - to add to the current string another substring at the start UNTIL LENGTH IS REACHED
let text3 = '010';
console.log(text3.padStart(8, '0')); //increases the length with the item we give
