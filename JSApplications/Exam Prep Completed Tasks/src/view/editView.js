import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editViewTemp = (car) => html`
  <section id="edit">
    <div class="form form-auto">
      <h2>Edit Your Car</h2>
      <form @submit="${onSubmit}" class="edit-form">
        <input .value="${car.model}" type="text" name="model" id="model" placeholder="Model" />
        <input .value="${car.imageUrl}" type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" />
        <input .value="${car.price}" type="text" name="price" id="price" placeholder="Price in Euro" />
        <input .value="${car.weight}" type="number" name="weight" id="weight" placeholder="Weight in Kg" />
        <input .value="${car.speed}" type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" />
        <textarea
          .value="${car.about}"
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
        ></textarea>
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
  const event = await dataService.detailsCar(id);
  context.render(editViewTemp(event));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let { model, imageUrl, price, weight, speed, about } = Object.fromEntries(formData);
  if (!model || !imageUrl || !price || !weight || !speed || !about) {
    return;
  }
  const data = { model, imageUrl, price, weight, speed, about };
  await dataService.updateCar(id, data);
  context.goTo(`/details/${id}`);
}
