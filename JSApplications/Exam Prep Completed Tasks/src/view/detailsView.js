import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const detailsTemp = (car, isOwner, isLoggedIn) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${car.imageUrl} alt="example1" />
      <p id="details-title">${car.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: €${car.price}</p>
          <p class="weight">Weight: ${car.weight} kg</p>
          <p class="top-speed">Top Speed: ${car.speed} kph</p>
          <p id="car-description">
           ${car.about}
          </p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${isOwner ? buttonsDisplay(car._id) : ''}
      </div>
      </div>
    </div>
  </section>
`;

function buttonsDisplay(id) {
  return html`
    <div id="action-buttons">
      <a href="/edit/${id}" id="edit-btn">Edit</a>
      <a href="/delete/${id}" id="delete-btn">Delete</a>
    </div>
  `;
}

export async function showDetails(ctx) {
  const carId = ctx.params.id;
  const car = await dataService.detailsCar(carId);
  const isOwner = userHelper.hasOwner(car._ownerId);
  const isLoggedIn = userHelper.getUserId();
  ctx.render(detailsTemp(car, isOwner, isLoggedIn));
}
