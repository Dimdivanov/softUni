function storageCatalogue(arr) {
  let sorted = arr.sort((a, b) => a.localeCompare(b));
  let result = {};

  for (let el of sorted) {
    let [productName, productPrice] = el.split(' : ');
    productPrice = Number(productPrice);

    let firstLetter = productName[0].toUpperCase();

    if (!result.hasOwnProperty(firstLetter)) {
      result[firstLetter] = [];
    }

    result[firstLetter].push({ productName, productPrice });
  }
  console.log(result);
  for (let letter in result) {
    console.log(letter);
    for (let product of result[letter]) {
      console.log(`  ${product.productName}: ${product.productPrice}`);
    }
  }
}
storageCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
