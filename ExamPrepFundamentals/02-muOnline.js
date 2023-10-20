function muOnline(arr) {
  let rooms = arr.split('|');

  let health = 100;
  let loot = 0;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(' ');

    let type = room[0];
    let number = Number(room[1]);

    if (type == 'potion') {
      if (health + number > 100) {
        number = 100 - health;
      }
      health += number;

      console.log(`You healed for ${number} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (type == 'chest') {
      loot += number;
      console.log(`You found ${number} bitcoins.`);
    } else {
      health -= number;
      if (health <= 0) {
        console.log(`You died! Killed by ${type}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      } else {
        console.log(`You slayed ${type}.`);
      }
    }
  }

  //if successful , print result
  console.log("You've made it!");
  console.log(`Bitcoins: ${loot}`);
  console.log(`Health: ${health}`);
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
