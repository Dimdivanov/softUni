const divs = document.querySelectorAll('div');

addGlobalEventListener('click', 'div', (event) => {
  console.log('hi');
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (event) => {
    if (event.target.matches(selector)) {
      callback(event);
    }
  });
}
