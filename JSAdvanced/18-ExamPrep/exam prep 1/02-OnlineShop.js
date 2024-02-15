class OnlineShop {
  constructor(warehouseSpace, products, sales) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }
  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error('Not enough space in the warehouse.');
    }
    this.products.push({ product, quantity });
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }
  quantityCheck(product, minimalQuantity) {
    const curProduct = this.products.find((el) => el.product === product);
    if (!curProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }
    if (curProduct.quantity >= minimalQuantity) {
      return `You have enough from product ${product}.`;
    } else {
      const difference = minimalQuantity - curProduct.quantity;
      curProduct.quantity = minimalQuantity;
      return `You added ${difference} more from the ${product} products.`;
    }
  }
  sellProduct(product) {
    const dataProduct = this.products.find((el) => el.product === product);
    if (!dataProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    dataProduct.quantity -= 1;
    this.sales.push({ product, quantity: 1 });

    return `The ${product} has been successfully sold.`;
  }
  revision() {
    if (this.sales.length == 0) {
      throw new Error('There are no sales today!');
    }
    let result = [
      `You sold ${this.sales.length} products today!`,
      'Products in the warehouse:',
    ];
    for (let data of this.products) {
      const { product, quantity } = data;
      result.push(`${product}-${quantity} more left`);
    }
    return result.join('\n');
  }
}
const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
