import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { notify } from './notify.js';

const createItemTemp = () => html`
  <section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form @submit="${onSubmit}" class="create-form">
        <input type="text" name="item" id="item" placeholder="Item" />
        <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
        <input type="text" name="price" id="price" placeholder="Price in Euro" />
        <input type="text" name="availability" id="availability" placeholder="Availability Information" />
        <input type="text" name="type" id="type" placeholder="Item Type" />
        <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50"></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

let context = null;
export async function showCreateView(ctx) {
  context = ctx;
  ctx.render(createItemTemp(null));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let { item, imageUrl, price, availability, type, description } = Object.fromEntries(formData);

  try {
    if (!item || !imageUrl || !price || !availability || !type || !description) {
      throw new Error('All fields are required');
    }

    await dataService.createElement({ item, imageUrl, price, availability, type, description });
    context.goTo('/market');
  } catch (error) {
    notify(error.message);
  }
}
