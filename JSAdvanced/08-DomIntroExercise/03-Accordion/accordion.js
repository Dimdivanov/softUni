function toggle() {
  let buttonRef = document.getElementsByClassName('button')[0];
  let hiddenDivRef = document.getElementById('extra');
  let text = buttonRef.textContent;

  if (text == 'More') {
    hiddenDivRef.style.display = 'block';
    buttonRef.textContent = 'Less';
  }
  if (text == 'Less') {
    hiddenDivRef.style.display = 'none';
    buttonRef.textContent = 'More';
  }
}
