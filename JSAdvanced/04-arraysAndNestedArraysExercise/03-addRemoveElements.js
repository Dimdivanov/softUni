function addRemoveElements(command) {
  let result = [];
  let sum = 1;
  for (let com of command) {
    if (com == 'add') {
      result.push(sum);
      sum += 1;
    } else if (com == 'remove') {
      result.pop();
      sum -= 1;
    }
  }
  let answer = result.length ? result.join('\n') : 'Empty';
  console.log(answer);
}
addRemoveElements(['add', 'add', 'add', 'add']);
// addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);
