import { html, render } from '../node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const root = document.getElementById('contacts');
const htmlRend = (contacts) => html`${contacts.map((personInfo) => person(personInfo))}`;

function person(contacts) {
  return html`
    <div class="contact card">
      <div>
        <i class="far fa-user-circle gravatar"></i>
      </div>
      <div class="info">
        <h2>Name: ${contacts.name}</h2>
        <button @click="${onClick}" class="detailsBtn">Details</button>
        <div class="details" id=${contacts.id}></div>
      </div>
    </div>
  `;
}

function onClick(e) {
  e.preventDefault();
  const button = e.target;
  const contact = button.nextElementSibling;
  console.log(contact);
  const detailsContent = html`
    <p>Phone number: ${contacts.phoneNumber}</p>
    <p>Email: ${contacts.email}</p>
  `;
  render(detailsContent, contact);
}

render(htmlRend(contacts), root);
