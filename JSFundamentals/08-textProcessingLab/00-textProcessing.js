// Manipulation
//indexOf(substring)
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
