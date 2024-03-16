import { hasUser, removeUser } from './src/utils/userUtils.js';
import { showRegisterView } from './src/views/registerView.js';
import { logout } from './src/api/userService.js';
import { showLoginView } from './src/views/loginView.js';
import { showHomeView } from './src/views/homeView.js';
import { showDashboardView } from './src/views/dashboardView.js';
import { showDetailView } from './src/views/detailsView.js';
import { showCreateView } from './src/views/createView.js';

document.querySelectorAll('div[data-section="section"]').forEach((div) => div.remove());

const main = document.getElementById('main');
const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);
updateNav();

const routes = {
  '/': showHomeView,
  '/home': showHomeView,
  '/dashboard': showDashboardView,
  '/create': showCreateView,
  '/login': showLoginView,
  '/register': showRegisterView,
  '/details': showDetailView,
  '/logout': async () => {
    await logout();
    removeUser();
    updateNav();
    goTo('/home');
  },
};

function updateNav() {
  // check if there is user - so we create util.js
  const isUserExist = hasUser();
  const guestA = document.querySelectorAll('a[data-permission="guest"]');
  const userA = document.querySelectorAll('a[data-permission="user"]');

  if (isUserExist) {
    guestA.forEach((a) => (a.style.display = 'none'));
    userA.forEach((a) => (a.style.display = 'block'));
  } else {
    guestA.forEach((a) => (a.style.display = 'block'));
    userA.forEach((a) => (a.style.display = 'none'));
  }
}

function renderer(view) {
  main.replaceChildren(view);
}

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

  goTo(viewName);
}

let ctx = {
  render: renderer,
  goTo,
  updateNav,
};

function goTo(name, ...params) {
  const handler = routes[name];
  handler(ctx, params);
}
goTo('/');
