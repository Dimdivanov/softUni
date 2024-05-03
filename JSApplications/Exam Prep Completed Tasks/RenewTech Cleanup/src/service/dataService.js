import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

const endpoints = {
  allElements: '/data/solutions?sortBy=_createdOn%20desc',
  dataElement: '/data/solutions',
  dataLike: '/data/likes',
  totalLikes: (solutionId) => `/data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`,
  numberLikes: (solutionId, userId) =>
    `/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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
//likes
async function likes(solutionId) {
  return await api.post(BASE_URL + endpoints.dataLike, { solutionId });
}
async function allLikes(solutionId) {
  return await api.get(BASE_URL + endpoints.totalLikes(solutionId));
}
async function didUserLike(solutionId, userId) {
  return await api.get(BASE_URL + endpoints.totalLikes(solutionId, userId));
}

export const dataService = {
  getAll,
  createElement,
  details,
  updateElement,
  delElement,
  likes,
  allLikes,
  didUserLike,
};
