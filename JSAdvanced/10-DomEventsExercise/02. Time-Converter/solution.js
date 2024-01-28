function attachEventsListeners() {
  let btnRef = Array.from(document.querySelectorAll('[type="button"]'));

  for (let btn of btnRef) {
    btn.addEventListener('click', convertHandler);
  }
  function convertHandler(event) {
    let inputTarget =
      event.currentTarget.parentElement.querySelector('[type="text"]'); //read
    let inputVal = Number(inputTarget.value);
    let unit = inputTarget.id;

    if (unit == 'days') {
      propNewVal(inputVal);
    } else if (unit == 'hours') {
      propNewVal(inputVal / 24);
    } else if (unit == 'minutes') {
      propNewVal(inputVal / 24 / 60);
    } else if (unit == 'seconds') {
      propNewVal(inputVal / 24 / 60 / 60);
    }
  }
  function propNewVal(days) {
    let inputs = document.querySelectorAll('[type="text"]');
    inputs[0].value = days;
    inputs[1].value = days * 24;
    inputs[2].value = days * 24 * 60;
    inputs[3].value = days * 24 * 60 * 60;
  }
}

// 1 day
// 24 hours
// 1440 minutes
// 86400 seconds
