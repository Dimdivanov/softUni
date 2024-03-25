import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const homeViewTemp = () => html`
  <section id="hero">
    <h1>Accelerate Your Passion Unleash the Thrill of Sport Cars Together!</h1>
  </section>
`;

export async function showHomeView(ctx) {
  ctx.render(homeViewTemp());
}
