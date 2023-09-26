function rectangle() {
  for (let i = 0; i < 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
      row += '*';
    }
    console.log(row);
  }
}
rectangle();
