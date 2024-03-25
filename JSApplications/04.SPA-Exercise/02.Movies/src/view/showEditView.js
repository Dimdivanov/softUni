import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editViewTemp = (data) => html`
  <section id="edit-movie" class="view-section">
    <form @submit="${onSubmit}" class="text-center border border-light p-5" action="#" method="">
      <h1>Edit Movie</h1>
      <div class="form-group">
        <label for="title">Movie Title</label>
        <input
          id="title"
          type="text"
          class="form-control"
          placeholder="Movie Title"
          value="${data.title}"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea
          class="form-control"
          placeholder="Movie Description..."
          .value="${data.description}"
          name="description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value="${data.img}" name="img" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
`;

let context = null;
let id = null;
export async function showEditView(ctx) {
  context = ctx;
  id = context.params.id;
  const show = await dataService.getDetailsShows(id);
  context.render(editViewTemp(show));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let { title, description, img } = Object.fromEntries(formData);

  if (!title || !description || !img) {
    return;
  }
  const data = { title, description, img };
  await dataService.updateShows(id, data);
  context.goTo(`/details/${id}`);
}
