function multiplyTable(input) {
  let n = Number(input[0]);

  for (let i = 1; i <= 10; i++) {
    let calc = i * n;
    console.log(`${i} * ${n} = ${calc}`);
  }
}
multiplyTable(['5']);
