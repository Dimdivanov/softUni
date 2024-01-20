function townsToJson(arr) {
  let newArr = [];
  let result = {};
  for (let el of arr) {
    let tokens = el
      .split('|')
      .map((x) => x.trim())
      .filter((x) => !!x);
    newArr.push(tokens);
  }
  for (let keys of newArr) {
    let [town, lat, long] = newArr[0];
    result[town] = town;
    result[lat] = lat;
    result;
  }
}
townsToJson([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
