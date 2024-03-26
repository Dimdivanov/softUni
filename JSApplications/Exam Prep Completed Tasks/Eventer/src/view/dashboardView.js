import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
//step 13
const dashboardViewTemp = (data) => html`
  <h2>Current Events</h2>
  <section id="dashboard">
    ${data.length > 0 ? data.map((event) => cardTemp(event)) : noTemplate()}
  </section>
`;

const cardTemp = (events) => html`
  <div class="event">
    <img src=${events.imageUrl} alt="example1" />
    <p class="title">${events.name}</p>
    <p class="date">${events.date}</p>
    <a class="details-btn" href="/details/${events._id}">Details</a>
  </div>
`;

const noTemplate = () => html`
  <!-- Display an h4 if there are no posts -->
  <h4>No Events yet.</h4>
`;

export async function showDashboardView(ctx) {
  const data = await dataService.getAllEvents();
  ctx.render(dashboardViewTemp(data));
}
