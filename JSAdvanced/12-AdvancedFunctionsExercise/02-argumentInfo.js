function argumentInfo(...data) {
  let result = {};
  for (let el of data) {
    let type = typeof el;
    console.log(`${type}: ${el}`);
    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }
    result[type] += 1;
  }
  let entries = Object.entries(result).sort((a, b) => b[1] - a[1]);
  for (let [key, value] of entries) {
    console.log(`${key} = ${value}`);
  }
}

argumentInfo({ name: 'bob' }, 3.333, 9.999);
