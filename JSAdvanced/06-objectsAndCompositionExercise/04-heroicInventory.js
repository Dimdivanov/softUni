function heroicInventory(arr) {
  let result = [];
  for (let token of arr) {
    let [name, level, items] = token.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : []; //doable with if
    result.push({ name, level, items }); //they want the output in array of objects
  }
  console.log(JSON.stringify(result));
}
heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
