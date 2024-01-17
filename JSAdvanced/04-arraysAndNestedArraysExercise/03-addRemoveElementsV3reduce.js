function addRemoveElements(commands) {
  let arr = commands.reduce(
    (result, curr, index) => (
      curr === 'add' ? result.push(index + 1) : result.pop(), result
    ),
    []
  );
  return arr.length ? arr.join('\n') : 'Empty';
}

console.log(addRemoveElements(['add', 'add', 'add', 'add']));
// addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log(addRemoveElements(['remove', 'remove', 'remove']));
