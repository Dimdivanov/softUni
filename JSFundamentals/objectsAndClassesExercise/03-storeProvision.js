function storeProvision(stock, orderedProducts) {
  let products = {}; //създаваме обект

  for (let i = 0; i < stock.length; i += 2) {
    //итерираме през първия масив
    let productName = stock[i];
    let qty = Number(stock[i + 1]);

    products[productName] = qty;
  }
  for (let j = 0; j < orderedProducts.length; j += 2) {
    //итерираме през втория масив
    let productName = orderedProducts[j];
    let qty = Number(orderedProducts[j + 1]);

    if (productName in products) {
      // if - in за търсене в обект
      products[productName] += qty;
    } else {
      products[productName] = qty;
    }
  }
  let entries = Object.entries(products); // превръщаме двойките в масиви за да ги обходим и логнем
  for (let [key, value] of entries) {
    // можем да ползваме дестуктуриране и тук а може и entrie[0] & entrie[1];
    console.log(`${key} -> ${value}`);
  }
}
storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
