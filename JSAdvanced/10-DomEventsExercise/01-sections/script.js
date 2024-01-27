function create(words) {
  let contentRef = document.getElementById('content');

  for (let word of words) {
    let divEl = document.createElement('div');
    let pEl = document.createElement('p');

    contentRef.appendChild(divEl);
    divEl.appendChild(pEl);

    pEl.textContent = word;
    pEl.style.display = 'none';
    divEl.addEventListener('click', reveal);
  }
  function reveal(event) {
    let curTar = event.target;
    curTar.children[0].style.display = 'block';
  }
}
