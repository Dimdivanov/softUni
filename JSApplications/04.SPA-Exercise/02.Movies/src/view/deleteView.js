import { dataService } from '../service/dataService.js';

export async function deleteShow(ctx) {
  const id = ctx.params.id;
  await dataService.deleteShows(id);
  ctx.goTo('/home');
}
