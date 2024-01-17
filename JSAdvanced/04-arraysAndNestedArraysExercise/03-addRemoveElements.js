function addRemoveElements(command) {
  let result = [];
  let n = 1;

  command.forEach((x) => {
    x === 'add' ? result.push(n) : result.pop();
    return n++;
  });
  let answer = result.length ? result.join('\n') : 'Empty';
  console.log(answer);
}
addRemoveElements(['add', 'add', 'add', 'add']);
// addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);
