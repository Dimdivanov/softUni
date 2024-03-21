import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './view/homeView.js';
import { showLoginView } from './view/loginView.js';
import { showRegisterView } from './view/registerView.js';
import { showDashboardView } from './view/dashboardView.js';
import { showLogoutView } from './view/logoutView.js';
import { showDetailsView } from './view/detailsView.js';
import { showCreateView } from './view/createView.js';
import { deleteIdea } from './view/showDeteleView.js';

const root = document.querySelector('main');
const nav = document.querySelectorAll('ul li a[class="nav-link"]');

const userNav = Array.from(nav).slice(0, 3);
const guestNav = [userNav[0], nav[3], nav[4]];

page(updateCTX);

page('/', showHomeView);
page('/home', showHomeView);
page('/dashboard', showDashboardView);
page('/create', showCreateView);
page('/details/:id', showDetailsView);
page('/delete/:id', deleteIdea);
page('/logout', showLogoutView);
page('/login', showLoginView);
page('/register', showRegisterView);

updateNav();
page();

function renderer(temp) {
  render(temp, root);
}

function updateCTX(ctx, next) {
  ctx.render = renderer;
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;
  next();
}

function updateNav() {
  const user = userHelper.getUserData();
  if (user) {
    userNav.forEach((nav) => (nav.style.display = 'inline-block'));
    guestNav.forEach((nav) => (nav.style.display = 'none'));
    userNav[0].style.display = 'inline-block';
  } else {
    userNav.forEach((nav) => (nav.style.display = 'none'));
    guestNav.forEach((nav) => (nav.style.display = 'inline-block'));
  }
}

function goTo(path) {
  page.redirect(path);
}
