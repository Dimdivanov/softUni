function deleteByEmail() {
  let inputRef = document.querySelector('[name="email"]').value;
  let tableRowRef = Array.from(document.querySelectorAll('tr'));
  let result = document.getElementById('result');
  for (let row of tableRowRef) {
    let td = Array.from(row.children);
    for (let i = 1; i < td.length; i++) {
      let element = td[i];
      if (element.textContent.includes(inputRef)) {
        row.remove();
        result.textContent = 'Deleted';
        return;
      }
    }
  }
  result.textContent = 'Not found.';
}
