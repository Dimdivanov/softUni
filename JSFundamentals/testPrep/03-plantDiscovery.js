function plantDiscovery(array) {
  let n = Number(array.shift());
  let plantRarity = {};

  for (let i = 0; i < n; i++) {
    let [plant, rarity] = array.shift().split('<->');
    plantRarity[plant] = { rarity, rating: 0, rateCount: 0 };
  }

  let command = array.shift();
  while (command !== 'Exhibition') {
    let curCommand = command.split(' - ').join(' ').split(': ');
    let action = curCommand.shift();
    let flowerAndPts = curCommand.shift().split(' ');

    if (plantRarity.hasOwnProperty(flowerAndPts[0])) {
      switch (action) {
        case 'Rate':
          let counter = 1;
          let [plant, pts] = flowerAndPts;
          pts = Number(pts);
          plantRarity[plant]['rating'] += pts;
          plantRarity[plant]['rateCount'] += counter;
          break;

        case 'Update':
          let [plantT, newRarity] = flowerAndPts;
          newRarity = Number(newRarity);
          plantRarity[plantT]['rarity'] = newRarity;
          break;

        case 'Reset':
          let resetPlant = flowerAndPts[0];
          plantRarity[resetPlant]['rating'] = 0;
          plantRarity[resetPlant]['rateCount'] = 0;
          break;
      }
    } else {
      console.log('error');
    }

    command = array.shift();
  }
  console.log(`Plants for the exhibition:`);

  for (let key in plantRarity) {
    let averageCount =
      plantRarity[key]['rating'] / plantRarity[key]['rateCount'] || 0;
    console.log(
      `- ${key}; Rarity: ${
        plantRarity[key]['rarity']
      }; Rating: ${averageCount.toFixed(2)}`
    );
  }
}
plantDiscovery([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition',
]);
