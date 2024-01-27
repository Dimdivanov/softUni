function addItem() {
  let input = document.getElementById('newItemText');
  if (input.value.length == 0) {
    return;
  }
  let liElement = document.createElement('li');
  liElement.textContent = input.value;
  let list = document.getElementById('items');
  list.appendChild(liElement);
  input.value = '';
}
