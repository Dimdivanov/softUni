import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const dashboardViewTemp = (data) => html`
  <h3 class="heading">Market</h3>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${data.length > 0 ? data.map((item) => cardTemp(item)) : noTemplate()}
  </section>
`;

const cardTemp = (item) => html`
  <div class="item">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
      <p class="price">Price: €${item.price}</p>
      <p class="availability">${item.availability}</p>
      <p class="type">Type: ${item.type}</p>
    </div>
    <a class="details-btn" href="/details/${item._id}">Uncover More</a>
  </div>
`;

const noTemplate = () => html`
  <!-- Display an h2 if there are no posts -->
  <h3 class="empty">No Items Yet</h3>
`;

export async function showDashboardView(ctx) {
  const data = await dataService.getAll();
  ctx.render(dashboardViewTemp(data));
}
