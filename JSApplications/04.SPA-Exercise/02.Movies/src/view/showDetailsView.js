import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const showDetailsTemp = (show, showId, isOwner) => html`
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
          ${isOwner ? userBtns(showId) : ''}
          <!-- if owner dont show -->
          ${isOwner ? '' : likeBtn(showId)} ${isOwner ? '' : numberLikes()}
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
function likeBtn(id) {
  return html`<a class="btn btn-primary" href="/like/${id}">Like</a>`;
}
function numberLikes() {
  return html` <span class="enrolled-span">Liked 1</span> `;
}

export async function showDetailsVeiw(ctx) {
  const showId = ctx.params.id;
  const show = await dataService.getDetailsShows(showId);
  const isOwner = userHelper.hasOwner(show._ownerId);
  ctx.render(showDetailsTemp(show, showId, isOwner));
}
