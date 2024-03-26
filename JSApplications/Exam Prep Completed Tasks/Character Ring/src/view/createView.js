import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const createCarTemp = () => html`
  <section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Add Character</h2>
      <form @submit="${onSubmit}" class="create-form">
        <input type="text" name="category" id="category" placeholder="Character Type" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
        <textarea
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="2"
          cols="10"
        ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="" />
    </div>
  </section>
`;

let context = null;
export async function showCreateView(ctx) {
  context = ctx;
  ctx.render(createCarTemp(null));
}
//dont forget to change data here
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

  await dataService.createElement({ category, imageUrl, description, moreInfo });
  context.goTo('/characters');
}
