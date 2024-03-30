import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { notify } from './notify.js';

const editViewTemp = (item) => html`
  <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form @submit="${onSubmit}" class="edit-form">
        <input .value="${item.item}" type="text" name="item" id="item" placeholder="Item" />
        <input
          .value="${item.imageUrl}"
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input .value="${item.price}" type="text" name="price" id="price" placeholder="Price in Euro" />
        <input
          .value="${item.availability}"
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input .value="${item.type}" type="text" name="type" id="type" placeholder="Item Type" />
        <textarea
          .value="${item.description}"
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
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
  const event = await dataService.details(id);
  context.render(editViewTemp(event));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let { item, imageUrl, price, availability, type, description } = Object.fromEntries(formData);
  try {
    if (!item || !imageUrl || !price || !availability || !type || !description) {
      throw new Error('All fields are required')
    }
    const data = { item, imageUrl, price, availability, type, description };
    await dataService.updateElement(id, data);
    context.goTo(`/details/${id}`);
    
  } catch (error) {
    notify(error.message);
  }
}
