function lockedProfile() {
  let showMoreBtn = Array.from(document.querySelectorAll('button'));
  for (let btn of showMoreBtn) {
    btn.addEventListener('click', showMore);
  }
  function showMore(event) {
    let target = event.target;
    let hiddenDiv = target.previousElementSibling;
    let radioRef = target.parentElement.querySelector(
      'input[type="radio"]:checked'
    );
    if (radioRef.value == 'unlock') {
      if (target.textContent == 'Show more') {
        target.textContent = 'Hide it';
        hiddenDiv.style.display = 'block';
      } else {
        target.textContent = 'Show more';
        hiddenDiv.style.display = 'none';
      }
    }
  }
}
