function treasureHunt(arr) {
  //parse input
  // split 1st array '|'
  let loot = arr.shift().split('|');

  for (let element of arr) {
    let curArray = element.split(' ');

    let tokens = curArray[0];
    console.log(curArray);

    if (tokens == 'Yohoho!') {
      break;
    } else if (tokens == 'Loot') {
      //pick up loot , insert the items at the start of the chest
      //if item is already contained do not insert
      let itemsToAdd = curArray.slice(1);
      for (let item of itemsToAdd) {
        if (!loot.includes(item)) {
          loot.unshift(item);
        }
      }
    } else if (tokens == 'Drop') {
      let indexToDrop = Number(curArray[1]); //3 index

      //drop the loot at the given position and add it at the end of the treasure chest
      // if the index is invalid , skip the command (continue)
    } else if (tokens == 'Steal') {
      //someone steals the last count looted items, if there are fewer than given count, remove as much as there are
      //print stolen items separated by ' , ';
    }
  }
  console.log(loot);
  // output the average treasure gain , which is the sum of all treasure items length / count of all items inside the chest formatted to the 2nd decimal
}
treasureHunt([
  'Gold|Silver|Bronze|Medallion|Cup',
  'Loot Wood Gold Coins',
  'Loot Silver Pistol',
  'Drop 3',
  'Steal 3',
  'Yohoho!',
]);
