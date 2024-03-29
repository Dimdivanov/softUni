import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const detailsTemp = (game, isOwner, isLoggedIn, allComments, sendComment) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>
      <p class="text">${game.summary}</p>
      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
          ${isOwner || isLoggedIn || allComments.length > 0
            ? allComments.map((el) => displayComment(el.comment))
            : html`<p class="no-comment">No comments.</p>`}
        </ul>
      </div>
      <!-- Edit/Delete buttons ( Only for creator of this game )  -->
      <div class="buttons">${isOwner ? buttonsDisplay(game._id) : ''}</div>
      <!-- Bonus -->
      <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
      ${!isOwner && isLoggedIn
        ? html`
            <article class="create-comment">
              <label>Add new comment:</label>
              <form @submit="${sendComment}" class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment" />
              </form>
            </article>
          `
        : ''}
    </div>
  </section>
`;

function buttonsDisplay(id) {
  return html`
    <a href="/edit/${id}" class="button">Edit</a>
    <a href="/delete/${id}" class="button">Delete</a>
  `;
}
function displayComment(comment) {
  return html`
    <li class="comment">
      <p>${comment}</p>
    </li>
  `;
}
export async function showDetails(ctx) {
  const gameId = ctx.params.id;
  const game = await dataService.details(gameId);
  const isOwner = userHelper.hasOwner(game._ownerId);
  const userId = userHelper.getUserId();
  const isLoggedIn = !!userId;

  let comment;
  async function sendComment(e) {
    e.preventDefault();
    comment = document.querySelector('textarea[name="comment"]').value;
    if (!comment) {
      return;
    }
    await dataService.postComment(gameId, comment);

    showDetails(ctx);
  }

  const allComments = await dataService.getAllComments(gameId);
  debugger;

  ctx.render(detailsTemp(game, isOwner, isLoggedIn, allComments, sendComment));
}
