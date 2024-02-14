class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }
  reserveABottle(wineName, wineType, price) {
    // re-check if task not working later on
    if (this.space === this.wines.length) {
      throw new Error('Not enough space in the cellar.');
    }
    let wine = {
      wineName,
      wineType,
      price,
      paid: false,
    };
    this.wines.push(wine);
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }
  payWineBottle(wineName, price) {
    price = Number(price);
    let currentWine = this.wines.find((a) => a.wineName === wineName);

    if (!currentWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (currentWine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }
    currentWine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }
  openBottle(wineName) {
    let currentTarget = this.wines.find((b) => b.wineName === wineName);
    if (!currentTarget) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    if (!currentTarget.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    this.wines = this.wines.filter((c) => c.wineName !== wineName); //filter the array and remove the wine
    return `You drank a bottle of ${wineName}.`;
  }
  cellarRevision(wineType) {
    if (wineType) {
      let currentWine = this.wines.find((d) => d.wineType === wineType);
      if (!currentWine) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
      return `${currentWine.wineName} > ${wineType} - ${
        currentWine.paid ? 'Has Paid' : 'Not Paid'
      }.`;
    }

    let buff = `You have space for ${
      this.space - this.wines.length
    } bottles more.\n`;
    buff += `You paid ${this.bill}$ for the wine.\n`;
    this.wines
      .sort((a, b) => a.wineName.localeCompare(b.wineName))
      .forEach((x) => {
        buff += `${x.wineName} > ${x.wineType} - ${
          x.paid ? 'Has Paid' : 'Not Paid'
        }.\n`;
      });
    return buff.trim();
  }
}
const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
