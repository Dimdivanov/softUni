const divs = document.querySelectorAll('div');

addGlobalEventListener('click', 'div', (event) => {
  console.log('hi');
});

//вместо това
document.addEventListener('click', (event) => {
  if (event.target.matches('div')) {
    console.log('hi');
  }
});

//това
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (event) => {
    if (event.target.matches(selector)) {
      callback(event);
    }
  });
}
