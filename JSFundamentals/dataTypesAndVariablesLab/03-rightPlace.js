function rightPlace(firstWord, letter, secondWord) {
  let replacedLetter = firstWord.replace('_', letter);
  let output = replacedLetter === secondWord ? 'Matched' : 'Not Matched';

  console.log(output);
}
rightPlace('Str_ng', 'I', 'StrIng');
