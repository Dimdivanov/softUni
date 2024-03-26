import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './view/homeView.js';
import { showLoginView } from './view/loginView.js';
import { showRegisterView } from './view/registerView.js';
import { showLogoutView } from './view/logoutView.js';
import { showDashboardView } from './view/dashboardView.js';
import { showAddEventView } from './view/addEventView.js';
import { showDetails } from './view/detailsView.js';
import { deleteEvent } from './view/deleteView.js';
import { showEditView } from './view/editView.js';

//link index html to your app
//step 1 take the main roots and user/guest view
const root = document.querySelector('main');
const userNav = document.querySelector('div[class="user"]');
const guestNav = document.querySelector('div[class="guest"]');

//step 2 create quick test to see if buttons work
page(updateCTX);
page('/', showHomeView);
page('/home', showHomeView);
page('/events', showDashboardView);
page('/addevent', showAddEventView);
page('/logout', showLogoutView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/details/:id', showDetails);
page('/delete/:id', deleteEvent);
page('/edit/:id', showEditView);
page();
updateNav();

//step 7 loading views in page and creating render / nav
function renderer(temp) {
  render(temp, root);
}

//step 8 create updateNav and goTo for View pages
function updateCTX(ctx, next) {
  ctx.render = renderer;
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;
  next();
}
//step 8.1 display the right menus
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
//step 8.2 redirect to page at the end of a View
function goTo(path) {
  page.redirect(path);
}
//step 9 start view pages

/*
BONUS - URL: /data/going - request to add ppl
URL: /data/going?where=eventId%3D%22{eventId}%22&distinct=_ownerId&count - request to get all ppl going
*/
