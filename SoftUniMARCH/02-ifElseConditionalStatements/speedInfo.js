function speedInfo(input) {
  let speed = Number(input[0]);

  if (speed <= 10) {
    console.log('Slow!');
  } else if (speed > 10 && speed <= 50) {
    console.log('average');
  } else if (speed > 50 && speed <= 150) {
    console.log('fast');
  } else if (speed > 50 && speed <= 1000) {
    console.log('ultra fast');
  } else {
    console.log('extremely fast');
  }
}
speedInfo(['49.5']);
