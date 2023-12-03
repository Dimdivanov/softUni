function solve(arr) {
  let spell = arr.shift();
  let command = arr.shift();

  while (command !== 'Abracadabra') {
    let curCommand = command.split(' ');
    let action = curCommand.shift();

    switch (action) {
      case 'Abjuration':
        spell = spell.toUpperCase();
        console.log(spell);
        break;
      case 'Necromancy':
        spell = spell.toLowerCase();
        console.log(spell);
        break;
      case 'Illusion':
        let [idx, letter] = curCommand;
        idx = Number(idx);
        let str = spell[idx];
        if (idx >= 0 && idx < spell.length) {
          spell = spell.replace(str, letter);
          console.log('Done!');
        } else {
          console.log('The spell was too weak.');
        }
        break;
      case 'Divination':
        let [sub1, sub2] = curCommand;
        if (spell.includes(sub1)) {
          while (spell.includes(sub1)) {
            spell = spell.replace(sub1, sub2);
          }
          console.log(spell);
        } else {
          command = arr.shift();
          continue;
        }
        break;
      case 'Alteration':
        let substring = curCommand.shift();
        if (spell.includes(substring)) {
          spell = spell.replace(substring, '');
          console.log(spell);
        }
        break;
      default:
        console.log('The spell did not work!');
    }

    command = arr.shift();
  }
}
// solve(['TR1GG3R', 'Necromancy', 'Illusion 8 m', 'Illusion 9 n', 'Abracadabra']);
solve(['A7ci0', 'Illusion 1 c', 'Illusion 4 o', 'Abjuration', 'Abracadabra']);
