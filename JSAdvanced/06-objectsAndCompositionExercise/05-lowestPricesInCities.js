function lowestPricesInCities(arr) {
  let result = {};
  for (let element of arr) {
    let [town, product, price] = element.split(' | ');
    price = Number(price);
    if (!result.hasOwnProperty(product)) {
      result[product] = {
        town,
        price,
      };
    } else if (result[product].price > price) {
      result[product].town = town;
      result[product].price = price;
    }
  }
  for (let [product, townInfo] of Object.entries(result)) {
    console.log(`${product} -> ${townInfo.price} (${townInfo.town})`);
  }
}
lowestPricesInCities([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);
