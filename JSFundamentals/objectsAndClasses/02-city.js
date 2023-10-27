function city(cities) {
  for (let key of Object.keys(cities)) {
    console.log(`${key} -> ${cities[key]}`);
  }
}
city({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
