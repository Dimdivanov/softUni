function legendaryFarming(str) {
  let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
  let junkMaterials = {};

  let legendaries = {
    shards: 'Shadowmourne',
    fragments: 'Valanyr',
    motes: 'Dragonwrath',
  };

  let materialsArr = str.split(' ');

  for (let i = 0; i < materialsArr.length; i += 2) {
    let qty = Number(materialsArr[i]);
    let material = materialsArr[i + 1].toLowerCase();

    if (material in keyMaterials) {
      keyMaterials[material] += qty;

      if (keyMaterials[material] >= 250) {
        let legendaryWon = legendaries[material];
        console.log(`${legendaryWon} obtained!`);

        keyMaterials[material] -= 250;
        break;
      }
    } else {
      if (material in junkMaterials) {
        junkMaterials[material] += qty;
      } else {
        junkMaterials[material] = qty;
      }
    }
  }

  let keyMaterialEntries = Object.entries(keyMaterials).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  for (let [name, quant] of keyMaterialEntries) {
    console.log(`${name}: ${quant}`);
  }

  let junkMaterialEntries = Object.entries(junkMaterials).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let [name, quant] of junkMaterialEntries) {
    console.log(`${name}: ${quant}`);
  }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming(
  '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
);
