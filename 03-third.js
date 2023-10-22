function deckOfCards(array) {
  let listOfCards = array.shift().split(', ');
  let commandNum = array.shift();

  for (let i = 0; i < commandNum; i++) {
    let tokens = array.shift().split(', ');
    let action = tokens.shift();

    if (action == 'Add') {
      let card = tokens[0];
      if (listOfCards.includes(card)) {
        console.log('Card is already in the deck');
      } else {
        listOfCards.push(card);
        console.log('Card successfully added');
      }
    } else if (action == 'Remove') {
      let card = tokens[0];
      if (listOfCards.includes(card)) {
        let index = listOfCards.indexOf(card); //finds the index of the card
        listOfCards.splice(index, 1); //removes the card
        console.log('Card successfully removed');
      } else {
        console.log('Card not found');
      }
    } else if (action == 'Remove At') {
      let index = tokens[0];
      if (index < 0 || index >= listOfCards.length) {
        console.log('Index out of range');
      } else {
        listOfCards.splice(index, 1);
        console.log('Card successfully removed');
      }
    } else if (action == 'Insert') {
      let index = tokens[0];
      let card = tokens[1];
      if (index < 0 || index >= listOfCards.length) {
        console.log('Index out of range');
      } else {
        if (listOfCards.includes(card)) {
          console.log('Card is already added');
        } else {
          listOfCards.splice(index, 0, card);
          console.log('Card successfully added');
        }
      }
    }
  }
  console.log(listOfCards.join(', '));
}
deckOfCards([
  'Ace of Diamonds, Queen of Hearts, King of Clubs',

  '3',

  'Add, King of Diamonds',

  'Insert, 2, Jack of Spades',

  'Remove, Ace of Diamonds',
]);
