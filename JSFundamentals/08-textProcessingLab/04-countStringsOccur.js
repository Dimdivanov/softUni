function countStringsOccur(text, word) {
  let count = 0;
  let textArr = text.split(' ');
  for (let words of textArr) {
    if (word == words) {
      count++;
    }
  }
  console.log(count);
}
countStringsOccur('This is a word and it also is a sentence', 'is');
