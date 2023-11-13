function hardWords(arr) {
  let [letter, wordsArr] = arr;

  let letterWords = letter.split(' ');
  let missedWords = letterWords.filter((word) => word.includes('_'));

  for (let slot of missedWords) {
    if (!slot.endsWith('_')) {
      slot = slot.slice(0, slot.length - 1);
    }
    let wordToFill = wordsArr.find((word) => word.length == slot.length);
    letter = letter.replace(slot, wordToFill);
  }
  console.log(letter);
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
