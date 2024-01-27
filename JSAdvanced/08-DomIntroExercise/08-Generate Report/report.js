function generateReport() {
  let inputElements = Array.from(document.getElementsByTagName('input'));
  let tableRows = Array.from(document.getElementsByTagName('tr'));

  const resultArr = [];
  const checkedCols = [];

  for (let i = 0; i < tableRows.length; i++) {
    const row = tableRows[i];
    const obj = {};

    for (let k = 0; k < row.children.length; k++) {
      const element = row.children[k];
      if (i == 0) {
        if (element.children[0].checked) {
          checkedCols.push(k);
        }
        continue;
      }

      if (checkedCols.includes(k)) {
        let propertyName = inputElements[k].name;
        obj[propertyName] = element.textContent;
      }
    }
    if (i !== 0) {
      resultArr.push(obj);
    }
  }

  document.getElementById('output').value = JSON.stringify(resultArr);
}
