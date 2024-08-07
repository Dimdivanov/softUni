import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const createCarTemp = () => html`
  <section id="create-page" class="auth">
    <form @submit="${onSubmit} " id="create">
      <div class="container">
        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title..." />

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category..." />

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game" />
      </div>
    </form>
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
  const title = formData.get('title');
  const category = formData.get('category');
  const maxLevel = formData.get('maxLevel');
  const imageUrl = formData.get('imageUrl');
  const summary = formData.get('summary');
  if (!title || !category || !maxLevel || !imageUrl || !summary) {
    return;
  }

  await dataService.createElement({ title, category, maxLevel, imageUrl, summary });
  context.goTo('/home');
}
