function mirrorWords(str) {
  let text = str.shift();
  let pattern = /(@|#)(?<str1>[A-Za-z]{3,})\1\1(?<str2>[A-Za-z]{3,})\1/g;

  let count = 0;
  let result = [];

  let match = text.matchAll(pattern);

  for (let el of match) {
    count++;
    let { str1, str2 } = el.groups;
    let reversedStr = str2.split('').reverse().join('');
    if (str1 == reversedStr) {
      result.push(`${str1} <=> ${str2}`);
    }
  }
  if (count == 0) {
    console.log('No word pairs found!');
  } else {
    console.log(`${count} word pairs found!`);
  }
  if (result.length == 0) {
    console.log('No mirror words!');
  } else {
    console.log('The mirror words are:');
    console.log(result.join(', '));
  }
}
mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
