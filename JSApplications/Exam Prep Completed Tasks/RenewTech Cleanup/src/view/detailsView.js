import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const detailsViewTemp = (solution, isOwner, isLogged, likedTimes, userLiked, onClick) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${solution.imageUrl} alt="example1" />
      <div>
        <p id="details-type">${solution.type}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${solution.description}</p>
            <p id="more-info">${solution.learnMore}</p>
          </div>
        </div>
        <h3>Like Solution:<span id="like">${likedTimes}</span></h3>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          ${isOwner ? buttonsDisplay(solution._id) : ''}
          ${isOwner || !isLogged || userLiked
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
  const solutionId = ctx.params.id;

  const solution = await dataService.details(solutionId);

  const isOwner = userHelper.hasOwner(solution._ownerId);
  const userId = userHelper.getUserId();
  const isLogged = !!userId;

  let likedTimes = await dataService.allLikes(solutionId);
  let userLiked = await dataService.didUserLike(solutionId, userId);

  async function onClick() {
    await dataService.likes(solutionId);
    showDetails(ctx);
  }
  ctx.render(detailsViewTemp(solution, isOwner, isLogged, likedTimes, userLiked, onClick));
}
