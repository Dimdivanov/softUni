function breakfastRobot() {
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let recipe = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  return function (data) {
    let [action, type, qty] = data.split(' ');
    switch (action) {
      case 'restock':
        return restock(type, qty);
      case 'prepare':
        return prepare(type, qty);
      case 'report':
        return report();
    }

    function restock(type, qty) {
      store[type] += Number(qty);
      return 'Success';
    }

    function prepare(type, qty) {
      let preparedRecipes = {};
      for (let [el, value] of Object.entries(recipe[type])) {
        let needElementQty = value * qty;
        if (store[el] < needElementQty) {
          return `Error: not enough ${el} in stock`;
        }
        preparedRecipes[el] = needElementQty;
      }
      for (let [el, value] of Object.entries(preparedRecipes)) {
        store[el] -= value;
      }
      return 'Success';
    }

    function report() {
      return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
    }
  };
}
let manager = breakfastRobot();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
