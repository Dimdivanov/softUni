import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const detailsTemp = (char, isOwner, isLoggedIn, likedTimes, userLiked, onClick) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${char.imageUrl} alt="example1" />
      <div>
        <p id="details-category">${char.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${char.description}</p>
            <p id="more-info">${char.moreInfo}</p>
          </div>
        </div>
        <h3>Is This Useful:<span id="likes">${likedTimes}</span></h3>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          ${isOwner ? buttonsDisplay(char._id) : ''}
          ${isOwner || !isLoggedIn || userLiked
            ? ''
            : html`
                <!--Bonus - Only for logged-in users ( not authors )-->
                <a @click="${onClick}" href="javascript:void(0)" id="like-btn">Like</a>
              `}
        </div>
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

export async function showDetails(ctx) {
  const charId = ctx.params.id;
  const char = await dataService.details(charId);
  const isOwner = userHelper.hasOwner(char._ownerId);
  const userId = userHelper.getUserId();
  const isLoggedIn = !!userId;

  let likedTimes = await dataService.getTotalLikes(charId);
  let userLiked = await dataService.didUserLiked(charId, userId);
  //new here
  async function onClick() {
    await dataService.like(charId);
    showDetails(ctx);
  }
  ctx.render(detailsTemp(char, isOwner, isLoggedIn, likedTimes, userLiked, onClick));
}
