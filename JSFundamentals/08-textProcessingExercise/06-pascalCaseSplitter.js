function pascalCaseSplitter(str) {
  let splitString = str.split(/(?=[A-Z])/); //with regEx
  console.log(splitString.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
