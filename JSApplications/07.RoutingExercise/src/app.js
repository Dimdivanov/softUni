import { page } from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { showDashboardView } from '../src/view/dashboardView.js';
//step 1 , step 2 requester
const root = document.querySelector('div[data-id="root"]');
const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

page('/', showDashboardView);
page('/dashboard', showDashboardView);
page('/create', () => console.error('create'));
page('/details/:id', () => console.error('details'));
page('/edit/:id', () => console.error('edit'));
page('/myFurniture', () => console.error('myFurniture'));
page('/login', () => console.error('login'));
page('/register', () => console.error('register'));
page('/logout', () => console.error('logout'));

page();
