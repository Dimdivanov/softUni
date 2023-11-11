function replaceRepChars(word) {
  let noRepeatStr = '';
  let prevChar = '';
  for (let curChar of word) {
    if (curChar !== prevChar) {
      noRepeatStr += curChar;
      prevChar = curChar;
    }
  }
  console.log(noRepeatStr);
}
replaceRepChars('aaaaabbbbbcdddeeeedssaa');
