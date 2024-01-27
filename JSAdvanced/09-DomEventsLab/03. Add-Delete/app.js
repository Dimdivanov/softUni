function addItem() {
  let input = document.getElementById('newItemText'); //взимаме от тук input
  if (input.value.length == 0) {
    return;
  }
  let liElement = document.createElement('li'); //правим празен елемент 'li'
  liElement.textContent = input.value; // даваме на елемента стойност

  let deleteBtn = document.createElement('a');
  deleteBtn.textContent = '[Delete]';
  deleteBtn.href = '#';
  deleteBtn.addEventListener('click', myFunc);
  liElement.appendChild(deleteBtn); //ще влезе в liElement-а и ще създаде 'a'

  let list = document.getElementById('items'); // избираме къде ще слагаме
  list.appendChild(liElement); // апендване на елемента
  input.value = ''; //зануляваме инпута
  function myFunc(event) {
    let deleteBtn = event.target;
    let liElement = deleteBtn.parentElement;
    liElement.remove();
  }
}
