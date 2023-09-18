function login(input) {
  let index = 0;

  let username = input[index];
  index++;

  let passWord = input[index];
  index++;

  let reversedPass = username.split('').reverse().join('');
  let banCount = 0;

  while (passWord !== reversedPass || passWord === reversedPass) {
    if (passWord === reversedPass) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      banCount++;
      if (banCount > 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log('Incorrect password. Try again.');
    }

    passWord = input[index];
    index++;
  }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
