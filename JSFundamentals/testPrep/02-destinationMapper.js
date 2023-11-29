function destinationMapper(str) {
  let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;

  let places = [];
  let travelPoints = 0;

  let matches = str.matchAll(pattern);
  for (let match of matches) {
    let { location } = match.groups;
    travelPoints += Number(location.length);
    places.push(location);
  }
  console.log(`Destinations: ${places.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');
