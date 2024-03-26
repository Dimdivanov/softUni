import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editViewTemp = (char) => html`
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Edit Character</h2>
      <form @submit="${onSubmit}" class="edit-form">
        <input .value="${char.category}" type="text" name="category" id="category" placeholder="Character Type" />
        <input .value="${char.imageUrl}" type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea
          .value="${char.description}"
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        ></textarea>
        <textarea
          .value="${char.moreInfo}"
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="2"
          cols="10"
        ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="" />
    </div>
  </section>
`;

let context = null;
//тук сетваме id-то за да можем в onSubmit да го използваме!
let id = null;
export async function showEditView(ctx) {
  context = ctx;
  id = context.params.id;
  const event = await dataService.details(id);
  context.render(editViewTemp(event));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const category = formData.get('category');
  const imageUrl = formData.get('image-url');
  const description = formData.get('description');
  const moreInfo = formData.get('additional-info');

  if (!category || !imageUrl || !description || !moreInfo) {
    return;
  }
  const data = { category, imageUrl, description, moreInfo };
  await dataService.updateElement(id, data);
  context.goTo(`/details/${id}`);
}
