function addRemoveElements(commands) {
  let arr = commands.reduce(
    (accumulator, curr, index) => (
      curr === 'add' ? accumulator.push(index + 1) : accumulator.pop(),
      accumulator
    ),
    []
  );
  return arr.length ? arr.join('\n') : 'Empty';
}

console.log(addRemoveElements(['add', 'add', 'add', 'add']));
// addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log(addRemoveElements(['remove', 'remove', 'remove']));
