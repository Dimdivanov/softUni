function passwordValidator(pass) {
  let isValidLength = checkValidLength(pass);
  let isOnlyLettersDigits = checkLetterDigit(pass);
  let isMinTwoDigits = checkMinTwoDigits(pass);

  if (isValidLength && isOnlyLettersDigits && isMinTwoDigits) {
    console.log('Password is valid');
  }

  function checkValidLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      console.log('Password must be between 6 and 10 characters');
      return false;
    }
  }

  function checkLetterDigit(pass) {
    for (let element of pass) {
      let code = element.charCodeAt(0);
      if (
        !(
          (code >= 48 && code <= 57) ||
          (code >= 65 && code <= 90) ||
          (code >= 97 && code <= 122)
        )
      ) {
        console.log('Password must consist only of letters and digits');
        return false;
      }
    }
    return true;
  }

  function checkMinTwoDigits(pass) {
    let digitCount = 0;

    for (let digit of pass) {
      let digitEl = digit.charCodeAt(0);

      if (digitEl >= 48 && digitEl <= 57) {
        digitCount++;
      }
    }

    if (digitCount < 2) {
      console.log('Password must have at least 2 digits');
      return false;
    } else {
      return true;
    }
  }
}
passwordValidator('logIn');
