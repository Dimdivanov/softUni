function solve() {
  let inputAreaRef = document.getElementById('input');
  let outputAreaRef = document.getElementById('output');

  let text = inputAreaRef.value;
  let arrayOfText = text.split('. ');
  if (text.trim() !== '') {
    // if empty space doesnt create new <p>
    let result = '';
    for (let i = 0; i < arrayOfText.length; i++) {
      if (i % 3 === 0) {
        result += '<p>';
      }
      result += arrayOfText[i];
      if ((i + 1) % 3 === 0 || i === arrayOfText.length - 1) {
        result += '</p>';
      } else {
        result += '. ';
      }
    }
    outputAreaRef.innerHTML += `${result}`;
  }
}

// function solve() {
//   let text = document
//     .getElementById('input')
//     .value.split('.')
//     .filter((e) => e.length > 0);
//   div.innerHTML = '';
//   let div = document.getElementById('output');
//   for (i = 0; i < text.length; i += 3) {
//     let output = [];
//     for (j = 0; j < 3; j++) {
//       if (text[i + j]) {
//         output.push(text[i + j]);
//       }
//     }
//     let res = output.join('. ') + '.';

//     div.innerHTML += `<p>${res}</p>`;
//   }
// }
