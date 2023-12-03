function fancyBarcode(input) {
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let pattern = /(^@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;

    let curProduct = input[i];

    if (pattern.test(curProduct)) {
      let digits = curProduct.match(/\d/g);
      if (digits) {
        let productGroup = digits.join('');
        console.log(`Product group: ${productGroup}`);
      } else {
        console.log(`Product group: 00`);
      }
    } else {
      console.log('Invalid barcode');
    }
  }
}
// fancyBarcode(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);
fancyBarcode([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);
