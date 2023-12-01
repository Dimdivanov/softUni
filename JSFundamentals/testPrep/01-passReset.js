function passReset(str) {
  let string = str.shift();
  let command = str.shift();

  while (command !== 'Done') {
    let curCommand = command.split(' ');
    let action = curCommand.shift();

    if (action == 'TakeOdd') {
      let oddIndices = '';
      for (let i = 1; i < string.length; i += 2) {
        oddIndices += string[i];
      }
      string = oddIndices;
      console.log(string);
    } else if (action == 'Cut') {
      let [idx, length] = curCommand;
      idx = Number(idx);
      length = Number(length);
      let substring = string.slice(idx, idx + length);
      string = string.replace(substring, '');
      console.log(string);
    } else if (action == 'Substitute') {
      let [substitude, substr] = curCommand;

      if (string.includes(substitude)) {
        while (string.includes(substitude)) {
          string = string.replace(substitude, substr);
        }
        console.log(string);
      } else {
        console.log('Nothing to replace!');
      }
    }
    command = str.shift();
  }
  console.log(`Your password is: ${string}`);
}
passReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
