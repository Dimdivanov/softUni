function city(cities) {
  for (let key of Object.keys(cities)) {
    console.log(`${key} -> ${cities[key]}`);
  }
  // for (let entries of Object.entries(cities)){
  //  console.log(entries[0], '->', entries[1]);
  //}

  //or

  // destructor "entries" if the array of cities is with more elements [el1, el2, el3**]
  // for (let [key, value, el3**] of Object.entries(cities){
  // console.log(key, '->', value);
  //}
}
city({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
