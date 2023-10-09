function charInRange(char1, char2) {
  let character1 = char1.charCodeAt(0);
  let character2 = char2.charCodeAt(0);

  let minCode = Math.min(character1, character2);
  let maxCode = Math.max(character1, character2);

  let result = '';
  for (let i = minCode + 1; i < maxCode; i++) {
    let curChar = String.fromCharCode(i);
    result += curChar + ' ';
  }

  console.log(result);
}
charInRange('#', ':');
