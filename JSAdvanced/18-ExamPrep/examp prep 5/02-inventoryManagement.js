class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }
    if (this.items.length >= this.capacity) {
      throw new Error('The inventory is already full.');
    }
    let curItem = this.items.find((item) => item.itemName === itemName);
    if (curItem) {
      curItem.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }
    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }
    let curItem = this.items.find((item) => item.itemName === itemName);
    if (!curItem) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }
    if (curItem.quantity < quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    curItem.quantity -= quantity;
    let itemIndex = this.items.findIndex((item) => item.itemName === itemName);
    if (curItem.quantity === 0) {
      this.items.splice(itemIndex, 1);
      this.outOfStock.push(itemName);
    }
    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }
    let curItem = this.items.find((item) => item.itemName === itemName);
    if (curItem) {
      curItem.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }
    // finding the item in the index and deleting it
    let outOfStocksIndex = this.outOfStock.indexOf(itemName);
    if (outOfStocksIndex !== -1) {
      this.outOfStock.splice(outOfStocksIndex, 1);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    let summary = `Current Inventory:\n`;
    summary += `${this.items
      .map(({ itemName, quantity }) => `${itemName}: ${quantity}`)
      .join('\n')}`;
    if (this.outOfStock.length > 0) {
      summary += `\nOut of Stock: ${this.outOfStock.join(', ')}`;
    }
    return summary;
  }
}
const manager = new InventoryManager(3);

console.log(manager.addItem('Drill', 10));
console.log(manager.addItem('Hammer', 5));
console.log(manager.addItem('Chisel', 3));
console.log(manager.sellItem('Drill', 3));
console.log(manager.sellItem('Hammer', 5));
console.log(manager.restockItem('Drill', 5));
console.log(manager.restockItem('Paintbrush', 1));
console.log(manager.getInventorySummary());
