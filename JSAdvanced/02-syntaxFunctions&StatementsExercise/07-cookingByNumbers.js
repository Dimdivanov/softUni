function cookingByNumbers(numStr, com1, com2, com3, com4, com5) {
  let num = Number(numStr);
  let comArr = [com1, com2, com3, com4, com5];

  for (let com of comArr) {
    if (com == 'chop') {
      num /= 2;
      console.log(num);
    } else if (com == 'dice') {
      num = Math.sqrt(num);
      console.log(num);
    } else if (com == 'spice') {
      num += 1;
      console.log(num);
    } else if (com == 'bake') {
      num *= 3;
      console.log(num);
    } else if (com == 'fillet') {
      num *= 0.8;
      console.log(num.toFixed(1));
    }
  }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
