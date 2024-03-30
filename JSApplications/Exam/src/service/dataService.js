import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

// Task specific endpoints
const endpoints = {
  allElements: '/data/cyberpunk?sortBy=_createdOn%20desc',
  dataElement: '/data/cyberpunk',
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

export const dataService = {
  getAll,
  createElement,
  details,
  updateElement,
  delElement,
};
