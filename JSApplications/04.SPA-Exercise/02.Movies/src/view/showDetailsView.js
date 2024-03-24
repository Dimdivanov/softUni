import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const showDetailsTemp = (show, showId) => html`
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
          <a class="btn btn-danger" href="/delete/${showId}">Delete</a>
          <a class="btn btn-warning" href="/edit/${showId}">Edit</a>
          <a class="btn btn-primary" href="/like/${showId}">Like</a>
          <span class="enrolled-span">Liked 1</span>
        </div>
      </div>
    </div>
  </section>
`;

export async function showDetailsVeiw(ctx) {
  const showId = ctx.params.id;
  const show = await dataService.getDetailsShows(showId);
  ctx.render(showDetailsTemp(show, showId));
}
