function wordsUppercase(str) {
  let pattern = /\w+/g;
  let match = str.match(pattern);
  console.log(match.join(', ').toUpperCase());
}
wordsUppercase('Hi, how are you?');
