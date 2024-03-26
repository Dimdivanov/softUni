import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

//step 14
const addEventTemp = () => html`
  <section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form @submit="${onSubmit}" class="create-form">
        <input type="text" name="name" id="name" placeholder="Event" />
        <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
        <input type="text" name="category" id="event-category" placeholder="Category" />

        <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

        <input type="text" name="date" id="date" placeholder="When?" />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

let context = null;
export async function showAddEventView(ctx) {
  context = ctx;
  ctx.render(addEventTemp(null));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let { name, imageUrl, category, description, date } = Object.fromEntries(formData);
  debugger;
  if (!name || !imageUrl || !category || !description || !date) {
    return;
  }

  await dataService.createEvent({ name, imageUrl, category, description, date });
  context.goTo('/events');
}
