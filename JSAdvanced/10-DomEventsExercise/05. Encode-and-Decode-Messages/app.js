function encodeAndDecodeMessages() {
  let btnArr = Array.from(document.querySelectorAll('button'));

  for (let btn of btnArr) {
    btn.addEventListener('click', myFunc);
  }

  function myFunc(event) {
    let target = event.target;
    let result = '';
    let text1 = document.getElementsByTagName('textarea')[0];
    let text2 = document.getElementsByTagName('textarea')[1];

    if (target.textContent.includes('Encode')) {
      for (let i = 0; i < text1.value.length; i++) {
        let newValue = text1.value.charCodeAt(i) + 1;
        let originalValue = String.fromCharCode(newValue);
        result += originalValue;
      }
      text2.value = result;
      text1.value = '';
    } else if (target.textContent.includes('Decode')) {
      for (let i = 0; i < text2.value.length; i++) {
        let newValue = text2.value.charCodeAt(i) - 1;
        let originalValue = String.fromCharCode(newValue);
        result += originalValue;
      }
      text2.value = result;
    }
  }
}

//The password for my bank account is 123pass321

// for (let i = 0; i < target.length; i++) {
//   let newValue = target.charCodeAt(i) + 1;
//   let originalValue = String.fromCharCode(newValue);
//   result += originalValue;
// }

// for (let i = 0; i < target.length; i++) {
//   let newValue = target.charCodeAt(i) - 1;
//   let originalValue = String.fromCharCode(newValue);
//   result += originalValue;
// }
