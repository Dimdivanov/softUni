function addItem() {
  let input = document.getElementById('newItemText'); //взимаме от тук input
  if (input.value.length == 0) {
    return;
  }
  let liElement = document.createElement('li'); //правим празен елемент 'li'
  liElement.textContent = input.value; // даваме на елемента стойност
  let list = document.getElementById('items'); // избираме къде ще слагаме
  list.appendChild(liElement); // апендване на елемента
  input.value = ''; //зануляваме инпута
}
