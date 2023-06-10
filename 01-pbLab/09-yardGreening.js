function yardGreening(input) {
  let metricGreen = Number(input[0]);       // инпута е число за това ползваме "Number(input[0]);"

  let price1Metric = metricGreen * 7.61;       // изчисляваме на кв метър цената - предпочитам да го сметна на нов ред не в (input-a)
  let discount = price1Metric * 0.18;          // смятаме дискаунта 

  let calculatedPrice = price1Metric - discount;   // изчисляваме крайната ценичка (не е проблем за сега че разпъваме 30 реда код :Д)

  console.log(`The final price is: ${calculatedPrice} lv.`);      // ползваме тези кавички ` ` и ${}
  console.log(`The discount is: ${discount} lv.`);
}


yardGreening(['550']);    // имаме само 1 инпут зададен в условието 
