function worldTour(array) {
  let stops = array.shift();
  let command = array.shift();

  while (command != 'Travel') {
    let curCommand = command.split(':');
    let action = curCommand.shift();

    if (action == 'Add Stop') {
      let index = Number(curCommand.shift());
      let str = curCommand.shift();

      if (index >= 0 && index < stops.length) {
        stops = stops.slice(0, index) + str + stops.slice(index);
        console.log(stops);
      } else {
        console.log(stops);
      }
    } else if (action == 'Remove Stop') {
      let [idx1, idx2] = curCommand;
      idx1 = Number(idx1);
      idx2 = Number(idx2);
      if (
        idx1 >= 0 &&
        idx1 < stops.length &&
        idx2 >= 0 &&
        idx2 < stops.length
      ) {
        stops = stops.slice(0, idx1) + stops.slice(idx2 + 1, stops.length);
        console.log(stops);
      } else {
        console.log(stops);
      }
    } else if (action == 'Switch') {
      let [oldStr, newStr] = curCommand;
      if (stops.includes(oldStr)) {
        stops = stops.replace(oldStr, newStr);
        console.log(stops);
      } else {
        console.log(stops);
      }
    }

    command = array.shift();
  }

  if (command == 'Travel') {
    console.log(`Ready for world tour! Planned stops: ${stops}`);
  }
}
// worldTour([
//   'Albania:Bulgaria:Cyprus:Deuchland',
//   'Add Stop:3:Nigeria',
//   'Remove Stop:4:8',
//   'Switch:Albania: Azərbaycan',
//   'Travel',
// ]);

worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
