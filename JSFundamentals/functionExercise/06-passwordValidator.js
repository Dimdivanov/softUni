function passwordValidator(params) {
  let word = String(params.length);

  if (word <= 6 && word >= 10) {
    console.log('Password is valid');
  } else {
    console.log('Password must be between 6 and 10 characters');
  }

  onlyLettersDigits(word);

  function onlyLettersDigits(letterDig) {
    let wordType = typeof letterDig;
    if (wordType == 'string' || wordType == 'number') {
      console.log('Password is valid');
    } else {
      console.log('Password must consist only of letters and digits');
    }
  }
}
passwordValidator('logIn');
