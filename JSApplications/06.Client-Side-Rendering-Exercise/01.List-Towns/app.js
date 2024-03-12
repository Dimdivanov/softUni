import { html, render } from './node_modules/lit-html/lit-html.js';

const form = document.querySelector('form').addEventListener('submit', onsubmit);
const root = document.getElementById('root');

function onsubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const townList = formData.get('towns').split(', ');
  renderer(createTemplate(townList));
}

function createTemplate(towns) {
  return html`
    <ul>
      ${towns.map((town) => html`<li>${town}</li>`)}
    </ul>
  `;
}

function renderer(temp) {
  render(temp, root);
}
