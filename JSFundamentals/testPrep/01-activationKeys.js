function activationKeys(arr) {
  let key = arr.shift();
  let command = arr.shift();

  while (command !== 'Generate') {
    let curCommand = command.split('>>>');
    let action = curCommand.shift();

    if (action == 'Contains') {
      let substring = curCommand.shift();
      if (key.includes(substring)) {
        console.log(`${key} contains ${substring}`);
      } else {
        console.log('Substring not found!');
      }
    } else if (action == 'Flip') {
      let side = curCommand.shift();
      let [idx1, idx2] = curCommand;
      if (side == 'Upper') {
        let string = key.slice(idx1, idx2);
        if (idx1 >= 0 && idx1 < key.length && idx2 >= 0 && idx2 < key.length) {
          key = key.replace(string, string.toUpperCase());
          console.log(key);
        } else {
          console.log(key);
        }
      } else if (side == 'Lower') {
        let string = key.slice(idx1, idx2);
        if (idx1 >= 0 && idx1 < key.length && idx2 >= 0 && idx2 < key.length) {
          key = key.replace(string, string.toLowerCase());
          console.log(key);
        } else {
          console.log(key);
        }
      }
    } else if (action == 'Slice') {
      let [idx1, idx2] = curCommand;
      idx1 = Number(idx1);
      idx2 = Number(idx2);
      if (idx1 >= 0 && idx1 < key.length && idx2 >= 0 && idx2 < key.length) {
        let sliced = key.slice(idx1, idx2);
        key = key.replace(sliced, '');
        console.log(key);
      } else {
        console.log(key);
      }
    }

    command = arr.shift();
  }
  console.log(`Your activation key is: ${key}`);
}
activationKeys([
  'abcdefghijklmnopqrstuvwxyz',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate',
]);
