function sumTable() {
  let tableRowReference = document.querySelectorAll('table tr');
  let total = 0;
  let arrayRows = Array.from(tableRowReference);
  for (let i = 1; i < arrayRows.length - 1; i++) {
    let col = arrayRows[i].children;
    let num = col[col.length - 1].textContent;
    num = Number(num);
    total += num;
  }
  document.getElementById('sum').textContent = total;
}
