function solve() {
  let inputAreaRef = document.getElementById('input');
  let outputAreaRef = document.getElementById('output');

  let text = inputAreaRef.value;
  let arrayOfText = text.split('. ');

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
