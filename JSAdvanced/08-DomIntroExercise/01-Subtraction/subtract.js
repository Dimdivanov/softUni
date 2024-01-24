function subtract() {
  let firstNumbRef = document.getElementById('firstNumber');
  let secondNumbRef = document.getElementById('secondNumber');
  let result = document.getElementById('result').textContent;

  let firstNumVal = Number(firstNumbRef.value);
  let secondNumVal = Number(secondNumbRef.value);
  document.getElementById('result').textContent = firstNumVal - secondNumVal;
}
