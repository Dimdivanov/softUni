function aluminumJoinery(input) {
  let pvcWindows = Number(input[0]);
  let sizeText = input[1];
  let deliveryType = input[2];

  let price = 0;

  if (pvcWindows < 10) {
    console.log('Invalid order');
  } else {
    switch (sizeText) {
      case '90X130':
        price += pvcWindows * 110;
        if (pvcWindows > 30 && pvcWindows < 60) {
          price -= price * 0.05;
        } else if (pvcWindows > 60) {
          price -= price * 0.08;
        }
        break;
      case '100X150':
        price += pvcWindows * 140;
        if (pvcWindows > 40 && pvcWindows < 80) {
          price -= price * 0.06;
        } else if (pvcWindows > 80) {
          price -= price * 0.1;
        }
        break;
      case '130X180':
        price += pvcWindows * 190;
        if (pvcWindows > 20 && pvcWindows < 50) {
          price -= price * 0.7;
        } else if (pvcWindows > 50) {
          price -= price * 0.12;
        }
        break;
      case '200X300':
        price += pvcWindows * 250;
        if (pvcWindows > 25 && pvcWindows < 50) {
          price -= price * 0.09;
        } else if (pvcWindows > 50) {
          price -= price * 0.14;
        }
        break;
    }
    if (deliveryType === 'With delivery') {
      price += 60;
    }

    if (pvcWindows > 99) {
      price -= price * 0.04;
    }
    console.log(`${price.toFixed(2)} BGN`);
  }
}
aluminumJoinery(['105', '100X150', 'With delivery']);
