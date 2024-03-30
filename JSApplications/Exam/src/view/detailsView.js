import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const detailsTemp = (item, isOwner, isLoggedIn) => html`
  <section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.item}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${item.price}</p>
          <p class="details-availability">${item.availability}</p>
          <p class="type">Type: ${item.type}</p>
          <p id="item-description">${item.description}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${isOwner ? buttonsDisplay(item._id) : ''}
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
  const itemId = ctx.params.id;
  const item = await dataService.details(itemId);
  const isOwner = userHelper.hasOwner(item._ownerId);
  const isLoggedIn = userHelper.getUserId();
  ctx.render(detailsTemp(item, isOwner, isLoggedIn));
}
