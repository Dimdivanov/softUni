class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }
  addProduct(productName, size, quantity, price) {
    const curProduct = this.productStock.find(
      (el) => el.productName == productName && el.size == size
    );

    if (curProduct) {
      curProduct.quantity += quantity;
      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    } else {
      const newProduct = { productName, size, quantity, price };
      this.productStock.push(newProduct);
      return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }
  }
  sendProduct(productName, size) {
    const curProduct = this.productStock.find(
      (el) => el.productName === productName && el.size === size
    );
    if (!curProduct) {
      throw new Error(
        `The product ${productName}, size ${size} is not in the inventory`
      );
    } else {
      const newProductStock = this.productStock.filter(
        (el) => el.productName !== productName
      );
      this.productStock = newProductStock;
      return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }
  }
  findProductsBySize(size) {
    const newProductStock = this.productStock.filter((el) => el.size == size);
    if (newProductStock.length === 0) {
      return `There are no products available in that size`;
    } else {
      const result = newProductStock
        .map((el) => `${el.productName}-${el.quantity} pieces`)
        .join(', ');
      return result;
    }
  }
  listProducts() {
    if (this.productStock.length === 0) {
      return `${this.storehouse} storehouse is empty`;
    }
    this.productStock.sort((a, b) =>
      a.productName.localeCompare(b.productName)
    );
    const productInfo = this.productStock.map(
      (el) =>
        `${el.productName}/Size:${el.size}/Quantity:${el.quantity}/Price:${el.price}$`
    );

    return `${this.storehouse} storehouse in ${
      this.location
    } available products:\n${productInfo.join('\n')}`;
  }
}
const storeHouse = new FashionRetailInventory('East', 'Milano');
console.log(storeHouse.addProduct('Shirt', 'M', 10, 25.0));
console.log(storeHouse.addProduct('T-Shirt', 'M', 10, 25.0));
console.log(storeHouse.addProduct('Shirt', 'L', 5, 30.0));
console.log(storeHouse.addProduct('Shoes', '9', 8, 50.0));
console.log(storeHouse.sendProduct('Shoes', '9', 8, 50.0));
console.log(storeHouse.listProducts());

//   assignBookToMember(memberName, bookTitle) {
//     const memberInArr = this.members.find((el) => el.memberName === memberName);
//     if (!memberInArr) {
//       throw new Error(`Member ${memberName} not found.`);
//     }
//     const bookIdx = this.books.findIndex(
//       (item) => item.bookTitle === bookTitle
//     );
//     if (bookIdx === -1) {
//       throw new Error(`Book "${bookTitle}" not found.`);
//     }
//     this.books.splice(bookIdx, 1);
//     return `Member ${memberName} has been assigned the book "${assignedBook}" by ${author}.`;
//   }
