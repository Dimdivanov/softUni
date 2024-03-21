import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const dashboardTemp = (ideas) => html`
  <div id="dashboard-holder">${ideas.length > 0 ? ideas.map((idea) => cardTemp(idea)) : noIdeas()}</div>
`;
const cardTemp = (data) => html`
  <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem">
    <div class="card-body">
      <p class="card-text">${data.title}</p>
    </div>
    <img class="card-image" src=${data.img} alt="Card image cap" />
    <a class="btn" href="/details/${data._id}">Details</a>
  </div>
`;
const noIdeas = () => html` <h1>No ideas yet! Be the first one :)</h1> `;

export async function showDashboardView(ctx) {
  const data = await dataService.getAllIdeas();
  ctx.render(dashboardTemp(data));
}
