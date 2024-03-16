import { get, del, post } from './requester.js';
const endpoints = {
  getAllIdeas: 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
  singleIde: 'data/ideas/',
};

async function getAllIdes() {
  return await get(endpoints.getAllIdeas);
}

async function getIdea(id) {
  return await get(endpoints.singleIde + id);
}

async function createIdea(data) {
  return await post(endpoints.singleIde, data);
}
async function removeIdea(id) {
  return await del(endpoints.singleIde + id);
}

//вместо да експортваме 4 функции експортваме само dataService и достъпваме с dataService.getIdea
export const dataService = {
  getAllIdes,
  getIdea,
  createIdea,
  removeIdea,
};
