import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from '../src/utility/userHelper.js';
import { showHomeView } from './view/homeView.js';
import { showDashboardView } from './view/dashboardView.js';
import { showLoginView } from './view/loginView.js';
import { showLogoutView } from './view/logoutView.js';
import { showRegisterView } from './view/registerView.js';
import { createSolutionView } from './view/addSolutionView.js';
import { delSolution } from './view/deleteSolView.js';
import { showDetails } from './view/detailsView.js';
import { showEditView } from './view/editView.js';

const root = document.querySelector('main');
const userNav = document.querySelector('.user');
const guestNav = document.querySelector('.guest');

page(updateCTX);
page('/index.html', '/');
page('/', showHomeView);
page('/home', showHomeView);
page('/dashboard', showDashboardView);
page('/details/:id', showDetails);
page('/delete/:id', delSolution);
page('/edit/:id', showEditView);
page('/login', showLoginView);
page('/logout', showLogoutView);
page('/register', showRegisterView);
page('/addSolution', createSolutionView);
page();
updateNav();

function renderer(temp) {
  render(temp, root);
}
function goTo(path) {
  page.redirect(path);
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
function updateCTX(ctx, next) {
  ctx.render = renderer;
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;
  next();
}
