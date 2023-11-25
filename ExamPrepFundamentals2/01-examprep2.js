function theImitationGame(arr) {
  let msg = arr.shift();
  let command = arr.shift();

  while (command != 'Decode') {
    let tokens = command.split('|');
    let action = tokens.shift();

    if (action == 'Move') {
      let nLetters = Number(tokens.shift());
      //o	Moves the first n letters to the back of the string.
      let firstLetters = msg.slice(0, nLetters);
      msg = msg.replace(firstLetters, '');
      msg += firstLetters;
    } else if (action == 'Insert') {
      //o	Inserts the given value before the given index in the string.
      let idx = Number(tokens.shift());
      let value = tokens.shift();
      msg = msg.slice(0, idx) + value + msg.slice(idx);
    } else if (action == 'ChangeAll') {
      //o	Changes all occurrences of the given substring with the replacement text.
      let [subStr, replacement] = tokens;
      while (msg.includes(subStr)) {
        msg = msg.replace(subStr, replacement);
      }
    }

    command = arr.shift();
  }
  console.log(`The decrypted message is: ${msg}`);
}
theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
