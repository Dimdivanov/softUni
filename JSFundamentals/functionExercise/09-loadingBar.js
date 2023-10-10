function loadingBar(num) {
  let message = num + '%';
  let condition = ' ' + ']';
  for (let i = 0; i <= num; i += 10) {
    if (i > 0) {
      condition += '%';
    }
    for (let j = 10; j <= 100 - num; j += 10) {
      if (i == 0) {
        condition += '.';
      }
    }
  }
  condition += '[';

  if (num == 100) {
    console.log(
      `${message} Complete! \n${condition.split('').reverse().join('')}`
    );
  } else {
    console.log(
      `${message} ${condition.split('').reverse().join('')} \nStill loading...`
    );
  }
}
loadingBar(30);
