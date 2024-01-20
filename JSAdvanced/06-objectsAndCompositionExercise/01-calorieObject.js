function calorieObject(arr) {
  let kcal = {};

  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    let ammount = arr[i + 1];
    ammount = Number(ammount);
    kcal[product] = ammount;
  }
  console.log(kcal);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
