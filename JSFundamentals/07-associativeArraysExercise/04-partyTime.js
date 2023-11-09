function partyTime(arr) {
  let vipGuest = { vip: [] };
  let regularGuest = { regular: [] };

  let guestCount = 0;

  let command = arr.shift();

  while (command !== 'PARTY') {
    if (!isNaN(command[0])) {
      vipGuest['vip'].push(command);
      guestCount++;
    } else {
      regularGuest['regular'].push(command);
      guestCount++;
    }
    command = arr.shift();
  }

  if (command == 'PARTY') {
    for (let guests of arr) {
        if ()
    }
  }
}
partyTime([
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
