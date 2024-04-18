import { html, render } from '../node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const root = document.getElementById('contacts');
const htmlRend = (contacts) => html`${contacts.map((personInfo) => person(personInfo))}`;

function person(info) {
  return html`
    <div class="contact card">
      <div>
        <i class="far fa-user-circle gravatar"></i>
      </div>
      <div class="info">
        <h2>Name: ${info.name}</h2>
        <button @click="${showDetails}" class="detailsBtn">Details</button>
        <div class="details" id="${info.id}" style="display: none;">
          <p>Phone number: ${info.phoneNumber}</p>
          <p>Email: ${info.email}</p>
        </div>
      </div>
    </div>
  `;
}
function showDetails(e) {
  e.preventDefault();
  const div = e.target.nextElementSibling;
  if (div.style.display == 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

render(htmlRend(contacts), root);
