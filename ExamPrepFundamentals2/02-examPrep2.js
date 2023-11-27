// object =
function adAstra(text) {
  let str = text.shift();
  let calories = 0;
  let products = [];

  let pattern =
    /([#|])(?<item>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)/g;

  let matches = str.matchAll(pattern);

  for (let match of matches) {
    let { item, expdate, cals } = match.groups;
    cals = Number(cals);

    calories += cals;
    products.push({ item, expdate, cals });
  }

  let days = Math.floor(calories / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  products.forEach((product) =>
    console.log(
      `Item: ${product.item}, Best before: ${product.expdate}, Nutrition: ${product.cals}`
    )
  );
}
// adAstra([
//   '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
// ]);
adAstra([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
]);
