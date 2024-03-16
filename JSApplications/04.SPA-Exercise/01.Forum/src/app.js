import { loadHome } from './home.js';

loadHome();
const homeBtn = document.querySelector('nav ul li a');
homeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  loadHome();
});
