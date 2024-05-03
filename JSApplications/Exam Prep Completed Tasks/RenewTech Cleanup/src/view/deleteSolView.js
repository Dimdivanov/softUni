import { dataService } from '../service/dataService.js';

export async function delSolution(ctx) {
  const id = ctx.params.id;
  const res = confirm('delete');
  if (res) {
    await dataService.delElement(id);
    ctx.goTo('/dashboard');
  }
}
