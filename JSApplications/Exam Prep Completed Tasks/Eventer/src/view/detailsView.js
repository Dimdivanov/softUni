import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';
let count = 0;
const detailsTemp = (event, isOwner, isLoggedIn, goingTimes, userGoing, onClick) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${event.imageUrl} alt="example1" />
      <p id="details-title">${event.name}</p>
      <p id="details-category">Category: <span id="categories">${event.category}</span></p>
      <p id="details-date">Date:<span id="date">${event.date}</span></p>
      <div id="info-wrapper">
        <div id="details-description">
          <span>${event.description}</span>
        </div>
      </div>
      <h3>Going: <span id="go">${goingTimes}</span> times.</h3>
      <div id="action-buttons">
        ${isOwner ? buttonsDisplay(event._id) : ''}
        ${isOwner || !isLoggedIn || userGoing
          ? ''
          : html`
              <!--Bonus - Only for logged-in users ( not authors )-->
              <a @click="${onClick}" href="javascript:void(0)" id="go-btn">Going</a>
            `}
      </div>
    </div>
  </section>
`;

function buttonsDisplay(id) {
  return html`
    <a href="/edit/${id}" id="edit-btn">Edit</a>
    <a href="/delete/${id}" id="delete-btn">Delete</a>
  `;
}

function onClick(e) {
  count++;
  e.target.style.display = 'none';
}
export async function showDetails(ctx) {
  const eventId = ctx.params.id;
  const event = await dataService.detailsEvent(eventId);
  const isOwner = userHelper.hasOwner(event._ownerId);
  const userId = userHelper.getUserId();
  const isLoggedIn = !!userId;

  let goingTimes = await dataService.getTotalGoing(eventId);
  let userGoing = await dataService.didUserGoing(eventId, userId);

  async function onClick() {
    await dataService.going(eventId);
    showDetails(ctx);
  }

  ctx.render(detailsTemp(event, isOwner, isLoggedIn, goingTimes, userGoing, onClick));
}
