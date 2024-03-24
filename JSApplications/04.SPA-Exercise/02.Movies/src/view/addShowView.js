import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const addShowViewTemp = () => html`
  <section id="add-movie" class="view-section">
    <form @submit="${onCreate}" id="add-movie-form" class="text-center border border-light p-5" action="#" method="">
      <h1>Add Movie</h1>
      <div class="form-group">
        <label for="title">Movie Title</label>
        <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="" />
      </div>
      <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Description" name="description"></textarea>
      </div>
      <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value="" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
`;

let context = null;
export async function showAddShowView(ctx) {
  context = ctx;
  ctx.render(addShowViewTemp());
}

async function onCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let { title, description, img } = Object.fromEntries(formData);
  debugger;
  if (!title || !description || !img) {
    return;
  }
  await dataService.createShows({ title, description, img });
  context.goTo('/home');
}
