import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './view/homeView.js';
import { showLoginView } from './view/loginView.js';
import { showRegisterView } from './view/register.js';
import { showLogoutView } from './view/logoutView.js';
import { showDashboardView } from './view/dashboardView.js';
import { showDetails } from './view/detailsView.js';
import { showCreateView } from './view/createView.js';
import { deleteChar } from './view/deleteView.js';
import { showEditView } from './view/editView.js';

const root = document.querySelector('main');
const userNav = document.querySelector('div[class="user"]');
const guestNav = document.querySelector('div[class="guest"]');

page(updateCTX);
page('/index.html', '/');
page('/', showHomeView);
page('/home', showHomeView);
page('/characters', showDashboardView);
page('/details/:id', showDetails);
page('/edit/:id', showEditView);
page('/delete/:id', deleteChar);
page('/addcharacter', showCreateView);
page('/logout', showLogoutView);
page('/login', showLoginView);
page('/register', showRegisterView);

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
