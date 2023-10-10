function orders(command, n) {
  let price = 0;
  if (command == 'coffee') {
    price = 1.5 * n;
  } else if (command == 'coke') {
    price = 1.4 * n;
  } else if (command == 'snacks') {
    price = 2.0 * n;
  } else {
    price = 1 * n;
  }
  console.log(price.toFixed(2));
}
orders('coffee', 2);
