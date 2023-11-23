function legendaryFarming(str) {
  let legendaries = { shards: 0, fragments: 0, motes: 0 };
  let junkItems = {};

  let legos = {
    shards: 'Shadowmourne',
    fragments: 'Valanyr',
    motes: 'Dragonwrath',
  };

  let materials = str.split(' ');

  for (let i = 0; i < materials.length; i += 2) {
    let qty = Number(materials[i]);
    let matName = materials[i + 1].toLowerCase();

    if (matName in legendaries) {
      legendaries[matName] += qty;
      if (legendaries[matName] >= 250) {
        let legendaryWon = legos[matName];
        console.log(`${legendaryWon} obtained!`);
        legendaries[matName] -= 250;
        break;
      }
    } else {
      if (matName in junkItems) {
        junkItems[matName] += qty;
      }
      junkItems[matName] = qty;
    }
  }

  let matEntries = Object.entries(legendaries).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  for (let [name, quant] of matEntries) {
    console.log(`${name}: ${quant}`);
  }
  let junkEntries = Object.entries(junkItems).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  for (let [junkName, junkQty] of junkEntries) {
    console.log(`${junkName}: ${junkQty}`);
  }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// legendaryFarming(
//   '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
// );
