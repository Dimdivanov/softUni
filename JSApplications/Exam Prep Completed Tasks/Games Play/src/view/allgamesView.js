import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const dashboardViewTemp = (data) => html`
  <section id="catalog-page">
    <h1>All Games</h1>
    ${data.length > 0 ? data.map((game) => cardTemp(game)) : noTemplate()}
  </section>
`;

const cardTemp = (game) => html`
  <!-- Display div: with information about every game (if any) -->
  <div class="allGames">
    <div class="allGames-info">
      <img src=${game.imageUrl} />
      <h6>${game.category}</h6>
      <h2>${game.title}</h2>
      <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
  </div>
`;

const noTemplate = () => html`
  <!-- Display paragraph: If there is no games  -->
  <h3 class="no-articles">No articles yet</h3>
`;

export async function showDashboardView(ctx) {
  const data = await dataService.getAll();
  ctx.render(dashboardViewTemp(data));
}
