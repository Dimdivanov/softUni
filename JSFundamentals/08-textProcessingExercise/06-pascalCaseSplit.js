function pascalCaseSplitter(str) {
  let splitArr = [];
  let curWord = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && i > 0) {
      splitArr.push(curWord);
      curWord = str[i];
    } else {
      curWord += str[i];
    }
  }
  splitArr.push(curWord);

  console.log(splitArr.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
