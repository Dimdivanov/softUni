function passWordGenerator(arr) {
  let [str1, str2, word] = arr;
  let concatStr = str1 + str2;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let idx = 0;

  for (let ch of concatStr) {
    if (vowels.includes(ch)) {
      concatStr = concatStr.replace(ch, word[idx].toUpperCase());
      idx++;
      if (idx == word.length) {
        idx = 0;
      }
    }
  }
  console.log(
    `Your generated password is ${concatStr.split('').reverse().join('')}`
  );
}
passWordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);

// the vowels are a, e, i, o, and u
