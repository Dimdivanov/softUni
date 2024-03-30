import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './view/homeView.js';
import { showLoginView } from './view/loginView.js';
import { showRegisterView } from './view/registerView.js';
import { showLogoutView } from './view/logoutView.js';
import { showDashboardView } from './view/marketView.js';
import { showCreateView } from './view/createView.js';
import { showDetails } from './view/detailsView.js';
import { deleteItem } from './view/deleteView.js';
import { showEditView } from './view/editView.js';

const root = document.getElementById('main-element');
const userNav = document.querySelector('.user');
const guestNav = document.querySelector('.guest');

page(updateCTX);
page('/index.html', '/');
page('/', showHomeView);
page('/home', showHomeView);
page('/market', showDashboardView);
page('/sell', showCreateView);
page('/details/:id', showDetails);
page('/delete/:id', deleteItem);
page('/edit/:id', showEditView);
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
