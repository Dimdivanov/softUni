import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const dashboardViewTemp = (data) => html`
  <h2>Characters</h2>
  <section id="characters">
    <!-- Display a div with information about every post (if any)-->
    ${data.length > 0 ? data.map((char) => cardTemp(char)) : noTemplate()}
  </section>
`;

const cardTemp = (char) => html`
  <div class="character">
    <img src=${char.imageUrl} alt="example1" />
    <div class="hero-info">
      <h3 class="category">${char.category}</h3>
      <p class="description">${char.description}</p>
      <a class="details-btn" href="/details/${char._id}">More Info</a>
    </div>
  </div>
`;

const noTemplate = () => html`
  <!-- Display an h2 if there are no posts -->
  <h2>No added Heroes yet.</h2>
`;

export async function showDashboardView(ctx) {
  const data = await dataService.getAll();
  ctx.render(dashboardViewTemp(data));
}
