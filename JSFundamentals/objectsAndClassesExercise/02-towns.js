function towns(arr) {
  for (let city of arr) {
    let [townName, latitude, longitude] = city.split(' | ');

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let townObject = { town: townName, latitude, longitude };
    console.log(townObject);
  }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
