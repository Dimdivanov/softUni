function login(input) {
  let index = 0;
  const userName = input[index];
  index++;

  let passWord = input[index];
  index++;

  let reversedName = userName.split('').reverse().join('');
  let banCount = 0;

  while (userName !== reversedName) {
    if (banCount === 3) {
      console.log(`User ${userName} blocked!`);
      break;
    }
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
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
