import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editViewTemp = (sol) => html`
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Edit Solution</h2>
      <form @submit="${onSubmit}" class="edit-form">
        <input .value="${sol.type}" type="text" name="type" id="type" placeholder="Solution Type" />
        <input .value="${sol.imageUrl}" type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea
          .value="${sol.description}"
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        ></textarea>
        <textarea
          .value="${sol.learnMore}"
          id="more-info"
          name="more-info"
          placeholder="more Info"
          rows="2"
          cols="10"
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

let context = null;
let id = null;

export async function showEditView(ctx) {
  context = ctx;
  id = context.params.id;
  const sol = await dataService.details(id);
  context.render(editViewTemp(sol));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const type = formData.get('type');
  const imageUrl = formData.get('image-url');
  const description = formData.get('description');
  const learnMore = formData.get('more-info');

  if (!type || !imageUrl || !description || !learnMore) {
    return;
  }
  const data = { type, imageUrl, description, learnMore };
  await dataService.updateElement(id, data);
  context.goTo(`/details/${id}`);
}
