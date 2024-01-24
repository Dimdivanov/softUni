function solve() {
  let textRef = document.querySelector('#text').value;
  let namingRef = document.querySelector('#naming-convention').value;
  let resultRef = document.getElementById('result');

  let wordArr = textRef.toLowerCase().split(' ');
  let transformed = '';

  if (namingRef == 'Camel Case') {
    transformed += wordArr[0];
    for (let i = 1; i < wordArr.length; i++) {
      let camelScenario =
        wordArr[i].slice(0, 1).toUpperCase() + wordArr[i].slice(1);
      transformed += camelScenario;
    }
    resultRef.textContent = transformed;
  } else if (namingRef == 'Pascal Case') {
    for (let word of wordArr) {
      let pascalScenario = word[0].toUpperCase() + word.slice(1);
      transformed += pascalScenario;
    }
    resultRef.textContent = transformed;
  } else {
    resultRef.textContent = 'Error!';
  }
}
