function palindromeInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curEleAsString = String(arr[i]);
    let reversedString = curEleAsString.split('').reverse().join('');

    if (curEleAsString == reversedString) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}
palindromeInteger([123, 323, 421, 121]);
palindromeInteger([32, 2, 232, 1010]);
