import { api } from '../requester.js';
//step 5 edit url's here
const BASE_URL = 'http://localhost:3030';

const endpoints = {
  allIdeas: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
  ideas: '/data/ideas',
};

async function getAllIdeas() {
  return await api.get(BASE_URL + endpoints.allIdeas);
}

async function createIdea(data) {
  return await api.post(BASE_URL + endpoints.ideas, data);
}

async function detailsIdea(id) {
  return await api.get(BASE_URL + endpoints.ideas + `/${id}`);
}

async function updateIdea(id, data) {
  return await api.put(BASE_URL + endpoints.ideas + `/${id}`, data);
}
async function deleteIdea(id) {
  return await api.del(BASE_URL + endpoints.ideas + `/${id}`);
}

export const dataService = {
  getAllIdeas,
  createIdea,
  detailsIdea,
  updateIdea,
  deleteIdea,
};
