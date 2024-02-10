function juiceFlavors(juices) {
  let juiceQuantities = {};
  let bottles = {};

  for (const juiceInfo of juices) {
    const [juiceName, juiceQuantity] = juiceInfo.split(' => ');
    const quantity = parseInt(juiceQuantity);

    if (!(juiceName in juiceQuantities)) {
      juiceQuantities[juiceName] = 0;
    }

    juiceQuantities[juiceName] += quantity;

    while (juiceQuantities[juiceName] >= 1000) {
      const bottlesCount = Math.floor(juiceQuantities[juiceName] / 1000);
      juiceQuantities[juiceName] %= 1000;

      if (!(juiceName in bottles)) {
        bottles[juiceName] = 0;
      }

      bottles[juiceName] += bottlesCount;
    }
  }

  for (const juice in bottles) {
    console.log(`${juice} => ${bottles[juice]}`);
  }
}

juiceFlavors([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
]);
