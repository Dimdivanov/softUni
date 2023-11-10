function censoredWords(text, word) {
  let censor = '*'.repeat(word.length);
  let result = text;
  while (result.includes(word)) {
    text = text.replace(word, censor);
  }
  console.log(text);
}
censoredWords('A small sentence with some words', 'small');
