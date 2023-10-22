function movingTarget(array) {
  let sequenceOfTargets = array.shift().split(' ');

  let command = array.shift();

  while (command !== 'End') {
    let tokens = command.split(' ');
    let action = tokens.shift();
    let idx = Number(tokens[0]);
    let power = Number(tokens[1]);

    if (action == 'Shoot') {
      if (idx < 0 || idx >= sequenceOfTargets.length) {
        command = array.shift();
        continue;
      } else if (sequenceOfTargets[idx] - power <= 0) {
        sequenceOfTargets.splice(idx, 1); // ако мишената е под нула изтрий мишената
      } else {
        sequenceOfTargets[idx] -= power; // ако мишената е окей набий демидж
      }
    } else if (action == 'Add') {
      if (idx < 0 || idx >= sequenceOfTargets.length) {
        console.log('Invalid placement!');
      } else {
        sequenceOfTargets.splice(idx, 0, power); // ако индекса съществува без да триеш сложи power
      }
    } else if (action == 'Strike') {
      if (idx - power >= 0 && idx + power < sequenceOfTargets.length - 1) {
        let leftside = idx - power;
        sequenceOfTargets.splice(Math.max(0, leftside), power * 2 + 1);
      } else {
        console.log('Strike missed!');
      }
    }
    command = array.shift(); //ПРИ WHILE не забравяй да смениш на следващия елемент
  }
  if (command == 'End') {
    console.log(sequenceOfTargets.join('|'));
  }
}
movingTarget([
  '52 74 23 44 96 110',
  'Shoot 5 10',
  'Shoot 1 80',
  'Strike 2 1',
  'Add 22 3',
  'End',
]);
