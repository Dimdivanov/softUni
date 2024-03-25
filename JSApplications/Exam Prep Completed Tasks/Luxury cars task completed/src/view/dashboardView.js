import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const dashboardViewTemp = (data) => html`
  <h3 class="heading">Our Cars</h3>
  <section id="dashboard">${data.length > 0 ? data.map((car) => cardTemp(car)) : noTemplate()}</section>
`;

const cardTemp = (car) => html`
  <div class="car">
    <img src=${car.imageUrl} alt="example1" />
    <h3 class="model">${car.model}</h3>
    <div class="specs">
      <p class="price">Price: €${car.price}</p>
      <p class="weight">Weight: ${car.weight} kg</p>
      <p class="top-speed">Top Speed: ${car.speed} kph</p>
    </div>
    <a class="details-btn" href="/details/${car._id}">More Info</a>
  </div>
`;

const noTemplate = () => html` <h3 class="nothing">Nothing to see yet</h3> `;

export async function showDashboardView(ctx) {
  const data = await dataService.getAllCars();
  ctx.render(dashboardViewTemp(data));
}
