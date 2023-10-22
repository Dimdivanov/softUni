function coffeeLover(array) {
  let startingList = array.shift().split(' ');
  let commandNum = array.shift();

  for (let i = 0; i < commandNum; i++) {
    let tokens = array.shift().split(' ');
    let action = tokens.shift();

    if (action == 'Include') {
      let coffee = tokens[0];
      startingList.push(coffee);
    } else if (action == 'Remove') {
      let position = tokens[0]; // first
      let count = Number(tokens[1]); // 2

      if (startingList.length < count) {
        continue;
      }
      if (position == 'first') {
        startingList.splice(0, count);
      } else if (position == 'last') {
        startingList.splice(-count);
      }
    } else if (action == 'Prefer') {
      let index1 = Number(tokens[0]);
      let index2 = Number(tokens[1]);

      if (index1 !== undefined && index2 !== undefined) {
        [startingList[index1], startingList[index2]] = [
          startingList[index2],
          startingList[index1],
        ];
      }
    } else if (action == 'Reverse') {
      startingList.reverse();
    }
  }
  console.log(`Coffees: \n${startingList.join(' ')}`);
}
coffeeLover([
  'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
  '5',
  'Include TurkishCoffee',
  'Remove first 2',
  'Remove last 1',
  'Prefer 3 1',
  'Reverse',
]);
