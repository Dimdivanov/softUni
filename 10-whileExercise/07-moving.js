function moving(input) {
  let index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;
  let height = Number(input[index]);
  index++;

  let freeSpace = width * length * height;
  let volume = 0;
  let command = input[index];
  index++;

  while (command !== 'Done') {
    command = Number(command);
    volume += command;

    if (volume >= freeSpace) {
      console.log(
        `No more free space! You need ${volume - freeSpace} Cubic meters more.`
      );
      break;
    }
    command = input[index];
    index++;
  }

  if (command === 'Done') {
    console.log(`${freeSpace - volume} Cubic meters left.`);
  }
}
moving(['10', '10', '2', '20', '20', '20', '20', '122']);
