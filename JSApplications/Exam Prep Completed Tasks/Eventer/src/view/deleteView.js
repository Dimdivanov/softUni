import { dataService } from "../service/dataService.js";

export async function deleteEvent(ctx) {
    const id = ctx.params.id;
    const res = confirm('delete');
    if (res){
        await dataService.deleteEvent(id);
        ctx.goTo('/events')
    }
}