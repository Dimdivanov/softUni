function creatingPartyList(input) {
  let vips = [];
  let regulars = [];
  let person = input.shift();
  while (person != 'PARTY') {
    if (isNaN(Number(person[0]))) {
      regulars.push(person);
    } else {
      vips.push(person);
    }
    person = input.shift();
  }
  for (let comingGuest of input) {
    if (vips.includes(comingGuest)) {
      vips.splice(vips.indexOf(comingGuest), 1);
    }
    if (regulars.includes(comingGuest)) {
      regulars.splice(regulars.indexOf(comingGuest), 1);
    }
  }
  console.log(vips.concat(regulars).length);
  vips.concat(regulars).forEach((guest) => {
    console.log(guest);
  });
}
creatingPartyList([
  '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
]);
