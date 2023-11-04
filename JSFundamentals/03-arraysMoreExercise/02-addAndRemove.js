function addRemove(arr) {
  let newArr = [];
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'add') {
      newArr.push(counter);
    } else {
      newArr.pop();
    }
    counter++;
  }
  if (newArr.length === 0) {
    console.log('Empty');
  } else {
    console.log(newArr.join(' '));
  }
}
addRemove(['add', 'add', 'add']);
