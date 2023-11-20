function furniture(input) {
  let myArr = [];
  let totalPrice = 0;

  let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

  let command = input.shift();

  while (command !== 'Purchase') {
    let match = command.match(pattern);
    if (match) {
      let { name, price, qty } = match.groups;
      let furniturePrice = Number(qty) * Number(price);
      myArr.push(name);
      totalPrice += furniturePrice;
    }

    command = input.shift();
  }
  console.log('Bought furniture:');
  if (myArr.length > 0) {
    console.log(myArr.join('\n'));
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
