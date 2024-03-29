import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

// Task specific endpoints
const endpoints = {
  homeElements: '/data/games?sortBy=_createdOn%20desc&distinct=category',
  allElements: '/data/games?sortBy=_createdOn%20desc',
  dataElement: '/data/games',
  getComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
  postComments: '/data/comments',
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
async function getGamesHomePage() {
  return await api.get(BASE_URL + endpoints.homeElements);
}

//get comments here
async function getAllComments(gameId) {
  return await api.get(BASE_URL + endpoints.getComments(gameId));
}
async function postComment(gameId, comment) {
  return await api.post(BASE_URL + endpoints.postComments, { gameId, comment });
}

export const dataService = {
  getAll,
  createElement,
  details,
  updateElement,
  delElement,
  getGamesHomePage,
  getAllComments,
  postComment,
};
