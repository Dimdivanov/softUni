import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const showDetailsTemp = (show, isOwner, isLoggedIn, likedTimes, userLiked, onClick) => html`
  <section id="movie-example" class="view-section">
    <div class="container">
      <div class="row bg-light text-dark">
        <h1>Movie title: ${show.title}</h1>

        <div class="col-md-8">
          <img class="img-thumbnail" src=${show.img} alt="Movie" />
        </div>
        <div class="col-md-4 text-center">
          <h3 class="my-3">Movie Description</h3>
          <p>${show.description}</p>
          <!--edit delete for owners only -->
          ${isOwner ? userBtns(show._id) : ''}
          ${isOwner || !isLoggedIn || userLiked.length > 0
            ? ''
            : html` <a @click="${onClick}" class="btn btn-primary" href="">Like</a>`}
          ${isOwner ? '' : html` <span class="enrolled-span">Liked ${likedTimes}</span>`}
        </div>
      </div>
    </div>
  </section>
`;

function userBtns(id) {
  return html`
    <a class="btn btn-danger" href="/delete/${id}">Delete</a>
    <a class="btn btn-warning" href="/edit/${id}">Edit</a>
  `;
}

export async function showDetailsVeiw(ctx) {
  const showId = ctx.params.id;
  const show = await dataService.getDetailsShows(showId);
  const isOwner = userHelper.hasOwner(show._ownerId);
  const userId = userHelper.getUserId();
  const isLoggedIn = !!userId;

  let likedTimes = await dataService.getNumberOfLikes(showId);
  let userLiked = await dataService.didUserLiked(showId, userId);
  debugger;
  async function onClick() {
    await dataService.sendLike(showId);
    showDetailsVeiw(ctx);
  }

  ctx.render(showDetailsTemp(show, isOwner, isLoggedIn, likedTimes, userLiked, onClick));
}
