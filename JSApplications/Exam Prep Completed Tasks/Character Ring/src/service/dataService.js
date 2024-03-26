import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

// Task specific endpoints
const endpoints = {
  allElements: '/data/characters?sortBy=_createdOn%20desc',
  dataElement: '/data/characters',
  sendLike: '/data/useful',
  getLikes: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
  likesPerUser: (characterId, userId) =>
    `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

async function getAll() {
  return await api.get(BASE_URL + endpoints.allElements);
}

async function createElement(data) {
  return await api.post(BASE_URL + endpoints.dataElement, data);
}

async function details(id) {
  return await api.get(BASE_URL + endpoints.dataElement + `/${id}`);
}

async function updateElement(id, data) {
  return await api.put(BASE_URL + endpoints.dataElement + `/${id}`, data);
}
async function delElement(id) {
  return await api.del(BASE_URL + endpoints.dataElement + `/${id}`);
}

//TODO sendLikes, getLikes, likesPerUser
async function like(characterId) {
  return await api.post(BASE_URL + endpoints.sendLike, { characterId });
}
async function getTotalLikes(characterId) {
  return await api.get(BASE_URL + endpoints.getLikes(characterId));
}
async function didUserLiked(characterId, userId) {
  return await api.get(BASE_URL + endpoints.likesPerUser(characterId, userId));
}
export const dataService = {
  getAll,
  createElement,
  details,
  updateElement,
  delElement,
  like,
  getTotalLikes,
  didUserLiked,
};
