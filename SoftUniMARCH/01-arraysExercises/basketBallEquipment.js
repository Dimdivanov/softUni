function basketBallEquipment(input) {
  let yearTax = Number(input[0]);                       // логваме input-a и обръщаме в число Number(input[0])

  let basketShoes = yearTax - yearTax * 0.4;             // цената им е 40% по малка (365 - 40% = 219)
  let basketClothes = basketShoes - basketShoes * 0.2;  // цената им е по евтина от кецовете с 20% (219 - 20% = 175.20)
  let basketBall = 0.25 * basketClothes;               // 1/4 = 0.25 (0.25 * 175.20) = 43.80
  let basketEquip = 0.2 * basketBall;                 // 1/5 = 0.2 (0.2 * 43.80) = 8.76

  let sum = yearTax + basketShoes + basketClothes + basketBall + basketEquip;
  console.log(sum);
}

basketBallEquipment(['365']);      //input 
basketBallEquipment(['550']);
