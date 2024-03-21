import { dataService } from '../service/dataService.js';

export async function deleteIdea(ctx) {
  const id = ctx.params.id;
  await dataService.deleteIdea(id);
  ctx.goTo('/dashboard');
}
