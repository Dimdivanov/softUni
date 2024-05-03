import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const createSolutionTemp = () => html`
  <section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Add Solution</h2>
      <form @submit="${onSubmit}" class="create-form">
        <input type="text" name="type" id="type" placeholder="Solution Type" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
        <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
        <button type="submit">Add Solution</button>
      </form>
    </div>
  </section>
`;

let context = null;
export async function createSolutionView(ctx) {
  context = ctx;
  ctx.render(createSolutionTemp());
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
  await dataService.createElement({ type, imageUrl, description, learnMore });
  context.goTo('/dashboard');
}
