import page from '//unpkg.com/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from '../src/utility/userHelper.js';
import { showDashboardView } from './view/dashboardView.js';
import { showRegisterView } from './view/registerView.js';
import { showLoginView } from './view/loginView.js';
//step 1 , step 2 requester
const root = document.querySelector('div[data-id="root"]');
const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

//step 6 creating views using routing - page
page(updateCTX);
page('/', showDashboardView);
page('/dashboard', showDashboardView);
page('/create', () => console.error('create'));
page('/details/:id', () => console.error('details'));
page('/edit/:id', () => console.error('edit'));
page('/myFurniture', () => console.error('myFurniture'));
page('/login', showLoginView); //step11
page('/register', showRegisterView);
page('/logout', () => console.error('logout'));

page();
//step 10 when logged in corrects the view
updateNav();

//step 6 creating views - render here
//temp е функцията dashboardTemplate(data)
function renderer(temp) {
  render(temp, root);
}
//page gives object context and we can create properties 'ctx.pesho'
//закачаме към ctx.render - функцията рендърер
function updateCTX(ctx, next) {
  ctx.render = renderer;
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;
  next();
}

//step 9 needed in views to check if user is logged in + add to ctx
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
