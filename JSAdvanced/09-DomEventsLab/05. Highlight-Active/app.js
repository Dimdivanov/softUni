function focused() {
  let divInputRef = Array.from(document.querySelectorAll('input[type="text"]'));

  for (let el of divInputRef) {
    el.addEventListener('focus', highLight);
    el.addEventListener('blur', removeFocus);
  }
  function highLight(event) {
    let curBox = event.target.parentNode;
    curBox.classList.add('focused');
  }
  function removeFocus() {
    let parentDiv = Array.from(document.querySelectorAll('div'));
    for (let div of parentDiv) {
      div.classList.remove('focused');
    }
  }
}
