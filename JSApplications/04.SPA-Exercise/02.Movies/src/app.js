import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showLoginView } from './view/loginView.js';
import { showRegisterView } from './view/registerView.js';
import { showHomeView } from './view/homeView.js';
import { showLogoutView } from './view/logoutView.js';
import { showAddShowView } from './view/addShowView.js';
import { showDetailsVeiw } from './view/showDetailsView.js';
import { showEditView } from './view/showEditView.js';
import { deleteShow } from './view/deleteView.js';
import { like } from './view/liked.js';

const root = document.querySelector('main[data-id="root"]');
const navigation = document.querySelectorAll('a[class="nav-link"]');

page(updateCTX);
page('/', showHomeView);
page('/home', showHomeView);
page('/details/:id', showDetailsVeiw);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', showLogoutView);
page('/addShow', showAddShowView);
page('/edit/:id', showEditView);
page('/delete/:id', deleteShow);
page('/liked/:id', like);

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
  let welcomeMsg = document.getElementById('welcome-msg');
  if (user) {
    welcomeMsg.textContent = `Welcome, ${user.email}`;
    navigation[0].style.display = 'inline-block';
    navigation[1].style.display = 'inline-block';
    navigation[2].style.display = 'none';
    navigation[3].style.display = 'none';
  } else {
    welcomeMsg.textContent = `Welcome, email`;
    navigation[3].style.display = 'inline-block';
    navigation[2].style.display = 'inline-block';
    navigation[1].style.display = 'none';
    navigation[0].style.display = 'none';
  }
}

function goTo(path) {
  page.redirect(path);
}
