function addItem() {
  let input = document.getElementById('newItemText');
  if (input.value.length == 0) {
    return;
  }
  let liElement = document.createElement('li');
  liElement.textContent = input.value;

  let deleteBtn = document.createElement('a');
  deleteBtn.textContent = '[Delete]';
  deleteBtn.href = '#';
  deleteBtn.addEventListener('click', myFunc);
  liElement.appendChild(deleteBtn);

  let list = document.getElementById('items');
  list.appendChild(liElement);
  input.value = '';
  function myFunc(event) {
    let deleteBtn = event.target;
    let liElement = deleteBtn.parentElement;
    liElement.remove();
  }
}
