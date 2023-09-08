function login(input) {
  let index = 0;
  let userName = input[index];
  index++;

  let passWord = input[index];
  index++;

  let reversedName = userName.split('').reverse().join('');
  let banCount = 0;

  /*for (let i = userName.length - 1; i >= 0; i--) {
    reversedName += userName[i];
  }*/

  while (userName !== reversedName && banCount <= 3) {
    if (passWord === reversedName) {
      console.log(`User ${userName} logged in.`);
      break;
    } else {
      console.log(`Incorrect password. Try again.`);
      banCount++;
    }
    passWord = input[index];
    index++;
  }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
