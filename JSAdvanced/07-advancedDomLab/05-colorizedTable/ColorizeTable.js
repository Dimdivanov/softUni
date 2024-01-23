function colorize() {
  let tableReference = document.getElementsByTagName('tr');
  let tableArr = Array.from(tableReference);
  for (let i = 1; i < tableArr.length; i += 2) {
    tableArr[i].style.backgroundColor = 'teal';
  }
}
