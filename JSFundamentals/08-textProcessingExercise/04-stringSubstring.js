function stringSubstr(word, text) {
  let str = word.split(' '); // transform in array - split
  let textArr = text.toLowerCase().split(' '); // make text lowerCase and split
  for (let word of str) {
    if (textArr.includes(word)) {
      console.log(`${word}`);
    } else {
      console.log(`${word} not found!`);
    }
  }
}
stringSubstr('javascript', 'JavaScript is the best programming language');
