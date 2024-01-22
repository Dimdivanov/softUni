function calc() {
  let num1 = document.getElementById('num1'); //target bar1
  let num2 = document.getElementById('num2'); //target bar2

  let result = document.getElementById('sum');
  result.value = Number(num1.value) + Number(num2.value);
}
