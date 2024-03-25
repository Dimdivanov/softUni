import { dataService } from '../service/dataService.js';

export async function deleteCar(ctx) {
  const id = ctx.params.id;
  const res = confirm('delete');
  if (res) {
    await dataService.deleteCar(id);
    ctx.goTo('/ourcars');
  }
}
