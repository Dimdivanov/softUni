function heroesOfCode(arr) {
  let n = Number(arr.shift());
  let party = {};

  for (let i = 0; i < n; i++) {
    let heroData = arr.shift();
    let [name, hp, mp] = heroData.split(' ');
    let hero = { hp: Number(hp), mp: Number(mp) };
    party[name] = hero;
  }

  let command = arr.shift();
  while (command != 'End') {
    command = arr.shift();
  }
}
heroesOfCode([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
]);
