import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './view/homeView.js';
import { showLoginView } from './view/loginView.js';
import { showRegisterView } from './view/registerView.js';
import { showDashboardView } from './view/allgamesView.js';
import { showLogoutView } from './view/logoutView.js';
import { showCreateView } from './view/createView.js';
import { showDetails } from './view/detailsView.js';
import { showEditView } from './view/editView.js';
import { deleteChar } from './view/deleteView.js';

const root = document.getElementById('main-content');
const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

page(updateCTX);
page('/index.html', '/');
page('/', showHomeView);
page('/home', showHomeView);
page('/allgames', showDashboardView);
page('/creategame', showCreateView);

page('/details/:id', showDetails);
page('/edit/:id', showEditView);
page('/delete/:id', deleteChar);

page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', showLogoutView);

page();
updateNav();

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
    userNav.style.display = 'inline-block';
    guestNav.style.display = 'none';
  } else {
    userNav.style.display = 'none';
    guestNav.style.display = 'inline-block';
  }
}

function goTo(path) {
  page.redirect(path);
}
