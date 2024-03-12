import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

render(createCatList(cats), root);

function createCatList(cats) {
  return html`
    <ul>
      ${cats.map((cat) => createCatCard(cat))}
    </ul>
  `;
}

function createCatCard(data) {
  return html`
    <li>
      <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap" />
      <div class="info">
        <button @click=${toggleCatStatus} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=${data.id}>
          <h4>Status Code: ${data.statusCode}</h4>
          <p>${data.statusMessage}</p>
        </div>
      </div>
    </li>
  `;
}
function toggleCatStatus(e) {
  const container = e.target.parentElement.querySelector('div');
  const currentState = container.style.display;
  if (currentState == 'none') {
    container.style.display = 'block';
    e.target.textContent = 'Hide status code';
  } else {
    container.style.display = 'none';
    e.target.textContent = 'Show status code';
  }
}
