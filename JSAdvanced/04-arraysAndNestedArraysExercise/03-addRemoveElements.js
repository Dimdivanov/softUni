function addRemoveElements(command) {
  let result = [];
  let n = 1;

  for (let i = 0; i < command.length; i++) {
    let curCommand = command[i];
    if (curCommand == 'add') {
      result.push(n);
      n++;
    } else if (curCommand == 'remove') {
      result.pop();
      n++;
    }
  }
  let answer = result.length ? result.join('\n') : 'Empty';
  console.log(answer);
}
// addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// addRemoveElements(['remove', 'remove', 'remove']);
