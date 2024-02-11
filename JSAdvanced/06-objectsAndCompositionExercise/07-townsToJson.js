function townsToJSON(input) {
  const [town, latitude, longitude] = input[0]
    .split('|')
    .map((col) => col.trim())
    .filter(Boolean);

  let result = [];

  for (let i = 1; i < input.length; i++) {
    const [townName, townLat, townLong] = input[i]
      .split('|')
      .map((col) => col.trim())
      .filter(Boolean);
    let townObj = {};
    townObj[town] = townName;
    townObj[latitude] = parseFloat(Number(townLat).toFixed(2));
    townObj[longitude] = parseFloat(Number(townLong).toFixed(2));
    result.push(townObj);
  }
  console.log(JSON.stringify(result));
}
townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
