function loadingBar(num) {
  let message = num + '%';
  let condition = ' ' + ']';

  if (num > 100) {
    num = 100;
  }
  conditionChecker(num);
  percentageChecker(num);

  function conditionChecker(condit) {
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
  }

  function percentageChecker(percentage) {
    if (num === 100) {
      console.log(
        `${message} Complete! \n${condition.split('').reverse().join('')}`
      );
    } else {
      console.log(
        `${message} ${condition
          .split('')
          .reverse()
          .join('')} \nStill loading...`
      );
    }
  }
}

loadingBar(100);
console.log('=============');
loadingBar(40);
console.log('=============');
loadingBar(300);
