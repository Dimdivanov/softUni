function reversedChars(str1, str2, str3) {
  let characters = str1 + ' ' + str2 + ' ' + str3;
  let reversed = characters.split('').reverse().join('');
  console.log(reversed);
}
reversedChars('1', 'L', '&');
