import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const detailsTemp = (idea, isOwner) => html`
  <div class="container home some">
    <img class="det-img" src=${idea.img} />
    <div class="desc">
      <h2 class="display-5">${idea.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${idea.description}</p>
    </div>
    <!-- if owner show delete button -->
    ${isOwner ? delOnOwner(idea) : ''}
  </div>
`;
const delOnOwner = (data) => html`
  <div class="text-center">
    <a class="btn detb" href="/delete/${data._id}">Delete</a>
  </div>
`;
export async function showDetailsView(ctx) {
  const ideaId = ctx.params.id;
  const idea = await dataService.detailsIdea(ideaId);
  const isOwner = userHelper.hasOwner(idea._ownerId);
  ctx.render(detailsTemp(idea, isOwner));
}
