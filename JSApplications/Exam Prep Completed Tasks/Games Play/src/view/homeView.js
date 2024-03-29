import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const homeViewTemp = (data) => html`
  <section id="welcome-world">
    <div class="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero" />

    <div id="home-page">
      <h1>Latest Games</h1>
      ${data.length > 0 ? data.map((game) => cardTemp(game)) : noTemplate()}
    </div>
  </section>
`;

const cardTemp = (data) => html`
  <!-- Display div: with information about every game (if any) -->
  <div class="game">
    <div class="image-wrap">
      <img src=${data.imageUrl} />
    </div>
    <h3>${data.title}</h3>
    <div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
    <div class="data-buttons">
      <a href="/details/${data._id}" class="btn details-btn">Details</a>
    </div>
  </div>
`;
const noTemplate = () => html`
  <!-- Display paragraph: If there is no games  -->
  <p class="no-articles">No games yet</p>
`;
export async function showHomeView(ctx) {
  const data = await dataService.getGamesHomePage();
  ctx.render(homeViewTemp(data));
}
