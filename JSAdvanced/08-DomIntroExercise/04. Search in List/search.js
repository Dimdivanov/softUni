function search() {
  let townsArr = Array.from(document.querySelectorAll('#towns li'));
  let searched = document.getElementById(`searchText`).value;
  let matches = 0;

  for (let town of townsArr) {
    if (town.textContent.includes(searched)) {
      town.style.textDecoration = `underline`;
      town.style.fontWeight = `bold`;
      matches++;
    }
  }

  document.getElementById(`searchText`).value = '';
  document.getElementById('result').textContent = `${matches} matches found`;
}
