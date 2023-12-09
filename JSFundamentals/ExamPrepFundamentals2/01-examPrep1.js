function secretChat(input) {
  let msg = input.shift(); //heVVodar!gniV
  let command = input.shift();

  while (command != 'Reveal') {
    let curCommand = command.split(':|:');
    let action = curCommand.shift(); //changeAll, Reverse, insert

    if (action == 'InsertSpace') {
      //inserting spaces
      let index = Number(curCommand.shift());
      msg = msg.slice(0, index) + ' ' + msg.slice(index);
      console.log(msg);
    } else if (action == 'Reverse') {
      let str = curCommand.shift();
      if (msg.includes(str)) {
        let reversedStr = str.split('').reverse().join('');
        msg = msg.replace(str, '') + reversedStr;
        console.log(msg);
      } else {
        console.log('error');
      }
    } else if (action == 'ChangeAll') {
      let [str1, str2] = curCommand;
      while (msg.includes(str1)) {
        //with while we check for all and change all , with if we'll change only the first
        msg = msg.replace(str1, str2);
      }
      console.log(msg);
    }

    command = input.shift();
  }
  if (command == 'Reveal') {
    console.log(`You have a new text message: ${msg}`);
  }
}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);
