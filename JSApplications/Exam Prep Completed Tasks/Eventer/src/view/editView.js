import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editViewTemp = (event) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form @submit="${onSubmit} " class="edit-form">
        <input type="text" name="name" id="name" placeholder="Event" .value=${event.name} />
        <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" .value=${event.imageUrl} />
        <input type="text" name="category" id="event-category" placeholder="Category" .value=${event.category} />

        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          .value=${event.description}
        ></textarea>

        <label for="date-and-time">Event Time:</label>
        <input type="text" name="date" id="date" placeholder="When?" .value=${event.date} />

        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

let context = null;
//тук сетваме id-то за да можем в onSubmit да го използваме!
let id = null;
export async function showEditView(ctx) {
  context = ctx;
  id = context.params.id;
  const event = await dataService.detailsEvent(id);
  context.render(editViewTemp(event));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let { name, imageUrl, category, description, date } = Object.fromEntries(formData);
  if (!name || !imageUrl || !category || !description || !date) {
    return;
  }
  const data = { name, imageUrl, category, description, date };
  await dataService.updateEvent(id, data);
  context.goTo(`/details/${id}`);
}
