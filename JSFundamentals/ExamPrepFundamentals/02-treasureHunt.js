function treasureHunt(arr) {
  let loot = arr.shift().split('|');
  let command = arr.shift();

  while (command != 'Yohoho!') {
    let tokens = command.split(' ');
    let action = tokens.shift();

    if (action == 'Loot') {
      tokens
        .filter((item) => !loot.includes(item))
        .forEach((item) => loot.unshift(item));

      // for (let item of items){
      //     loot.unshift(item);
      // }
    } else if (action == 'Drop') {
      let idx = Number(tokens.shift()); // индекса е 3
      if (idx >= 0 && idx < loot.length) {
        // провери дали е валиден индекса от 0 до дължината на масива
        let removedItem = loot.splice(idx, 1).shift(); // махаме и добаваме масив и за да му махнем масива ползваме shift
        loot.push(removedItem);
      }
    } else if (action == 'Steal') {
      let count = Number(tokens.shift()); //3
      let stolenItems = loot.splice(-count);
      console.log(stolenItems.join(', '));
    }

    command = arr.shift();
  }
  if (loot.length == 0) {
    console.log('Failed treasure hunt.');
  } else {
    let totalGain = 0;
    for (let item of loot) {
      totalGain += item.length;
    }
    let avgGain = totalGain / loot.length;
    console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
  }
}

treasureHunt([
  'Gold|Silver|Bronze|Medallion|Cup',
  'Loot Wood Gold Coins',
  'Loot Silver Pistol',
  'Drop 3',
  'Steal 3',
  'Yohoho!',
]);
