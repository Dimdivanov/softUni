function addItem() {
  let textInput = document.getElementById('newItemText');
  let newItemValue = document.getElementById('newItemValue');

  let divOpt = document.querySelector('select');
  let newOption = document.createElement('option');
  newOption.textContent = textInput.value;
  newOption.value = newItemValue.value;
  newOption.setAttribute('id', 'menu');
  divOpt.appendChild(newOption);

  textInput.value = '';
  newItemValue.value = '';
}
