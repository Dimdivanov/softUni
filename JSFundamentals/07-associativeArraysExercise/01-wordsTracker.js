function wordsTracker(arr) {
  let searchedWords = arr.shift().split(' ');

  let occurrences = {}; //вкарваме в този празен обект всички думи които търсим
  for (let word of searchedWords) {
    occurrences[word] = 0; // думите които търсим са равни на нула повторения
  }

  for (let word of arr) {
    // правим нов лууп който ще търси дали думата я има в occurances
    if (word in occurrences) {
      // ***if in или ***hasOwnProperty method или ***Object.keys(myObject).includes('key1')
      occurrences[word]++;
    }
  }
  let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);
  for (let [word, repeats] of entries) {
    console.log(`${word} - ${repeats}`);
  }
}
wordsTracker([
  'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurrences',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task',
]);
