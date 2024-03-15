document.querySelectorAll('div[data-selection="section"]').forEach((div) => div.remove());
const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);

const routes = {
  '/': () => console.error('home'),
  '/home': () => console.error('home'),
  '/dashboard': () => console.error('dashboard'),
  '/create': () => console.error('create'),
  '/login': () => console.error('login'),
  '/register': () => console.error('register'),
  '/details': () => console.error('details'),
  '/logout': () => console.error('logout'),
};

function onNavigate(event) {
  event.preventDefault();
  let element = event.target;
  if (event.target.tagName !== 'A' && event.target.tagName !== 'IMG') {
    return;
  }
  if (event.target.tagName == 'IMG') {
    element = event.target.parentElement;
  }

  const viewName = new URL(element.href).pathname;
  debugger;
  goTo(viewName);
}

function goTo(name) {
  const handler = routes[name];
  handler();
}
