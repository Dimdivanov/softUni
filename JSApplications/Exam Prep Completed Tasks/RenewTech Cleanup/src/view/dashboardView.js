import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const dashboardViewTemp = (data) => html`
  <h2>Solutions</h2>
  <section id="solutions">
    <!-- Display a div with information about every post (if any)-->
    ${data.length > 0 ? data.map((sol) => cardTemp(sol)) : noTemplate()}
  </section>
`;

const cardTemp = (sol) => html`
  <div class="solution">
    <img src="${sol.imageUrl}" alt="example3" />
    <div class="solution-info">
      <h3 class="type">${sol.type}</h3>
      <p class="description">${sol.description}</p>
      <a class="details-btn" href="/details/${sol._id}">Learn More</a>
    </div>
  </div>
`;
const noTemplate = () => html`
  <!-- Display an h2 if there are no posts -->
  <h2 id="no-solution">No Solutions Added.</h2>
`;

export async function showDashboardView(ctx) {
  const data = await dataService.getAll();
  ctx.render(dashboardViewTemp(data));
}
