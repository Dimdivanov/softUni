function repeatingString(str, n) {
  console.log(repeat(str, n));

  function repeat(string, nTimes) {
    let buffer = '';
    for (let i = 0; i < n; i++) {
      buffer += str;
    }
    return buffer;
  }
}
repeatingString('abc', 3);
