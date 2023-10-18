function computerStore(input) {
  index = 0;
  let priceSum = 0;
  let taxes = 0;

  let price = input[index];
  index++;
  while (price !== 'special' && price !== 'regular') {
    let priceToNum = Number(price);

    if (priceToNum < 0) {
      console.log('Invalid price!');
    } else {
      priceSum += priceToNum;
      taxes += priceToNum * 0.2;
    }
    price = input[index];
    index++;
  }
  let totalPrice = priceSum + taxes;
  if (price == 'special') {
    totalPrice -= totalPrice * 0.1;
  }
  if (totalPrice == 0) {
    console.log('Invalid order!');
  } else {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceSum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$
`);
  }
}
computerStore(['regular']);
