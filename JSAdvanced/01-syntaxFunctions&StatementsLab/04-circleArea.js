function circleArea(num) {
  let checkNum = typeof num;
  if (checkNum == 'number') {
    const pi = Math.PI;
    let area = pi * Math.pow(num, 2);
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${checkNum}.`
    );
  }
}
circleArea(5);
