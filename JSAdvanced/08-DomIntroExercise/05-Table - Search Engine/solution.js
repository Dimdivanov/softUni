function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  let searchRef = document.getElementById('searchField');
  let rowDataRef = Array.from(document.querySelectorAll('tbody tr'));

  function onClick() {
    let searchText = searchRef.value;
    //loop through the cells minus 1st line and check for full words or letters
    for (let tableRow of rowDataRef) {
      let tableData = Array.from(tableRow.querySelectorAll('td'));
      for (let data of tableData) {
        if (data.textContent.includes(searchText)) {
          tableRow.classList.add('select');
          break;
        } else {
          tableRow.classList.remove('select');
        }
      }
      searchRef.value = '';
    }
  }
}
