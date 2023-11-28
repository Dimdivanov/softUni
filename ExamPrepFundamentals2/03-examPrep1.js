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
    let tokens = command.split(' - ');
    let action = tokens.shift();
    let name = tokens.shift();
    let pts = Number(tokens[0]);

    let hero = party[name];

    if (action == 'CastSpell') {
      if (hero.mp >= pts) {
        hero.mp -= pts;
        console.log(
          `${name} has successfully cast ${tokens[1]} and now has ${hero.mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${tokens[1]}`);
      }
    } else if (action == 'TakeDamage') {
      hero.hp -= pts;
      if (hero.hp > 0) {
        console.log(
          `${name} was hit for ${pts} HP by ${tokens[1]} and now has ${hero.hp} HP left!`
        );
      } else {
        console.log(`${name} has been killed by ${tokens[1]}!`);
        delete party[name];
      }
    } else if (action == 'Recharge') {
      if (hero.mp + pts > 200) {
        pts = 200 - hero.mp;
      }
      hero.mp += pts;
      console.log(`${name} recharged for ${pts} MP!`);
    } else if (action == 'Heal') {
      if (hero.hp + pts > 100) {
        pts = 100 - hero.hp;
      }
      hero.hp += pts;
      console.log(`${name} healed for ${pts} HP!`);
    }

    command = arr.shift();
  }
  for (let name in party) {
    let hero = party[name];
    console.log(name);
    console.log(`  HP: ${hero.hp}`);
    console.log(`  MP: ${hero.mp}`);
  }
}
// heroesOfCode([
//   '2',
//   'Solmyr 85 120',
//   'Kyrre 99 50',
//   'Heal - Solmyr - 10',
//   'Recharge - Solmyr - 50',
//   'TakeDamage - Kyrre - 66 - Orc',
//   'CastSpell - Kyrre - 15 - ViewEarth',
//   'End',
// ]);

heroesOfCode([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);
