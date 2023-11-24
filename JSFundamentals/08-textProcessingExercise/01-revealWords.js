function revealWords(word, text) {
  let words = word.split(', ');

  for (let curWord of words) {
    let searchedWord = '*'.repeat(curWord.length);
    text = text.replace(searchedWord, curWord);
  }
  console.log(text);
}
revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);
