import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

// Task specific endpoints
const endpoints = {
  allCars: '/data/cars?sortBy=_createdOn%20desc',
  dataCars: '/data/cars',
  getSpecificCar: (query) => `/data/cars?where=model%20LIKE%20%22${query}%22`,
};

async function getAllCars() {
  return await api.get(BASE_URL + endpoints.allCars);
}

async function createCar(data) {
  return await api.post(BASE_URL + endpoints.dataCars, data);
}

async function detailsCar(id) {
  return await api.get(BASE_URL + endpoints.dataCars + `/${id}`);
}

async function updateCar(id, data) {
  return await api.put(BASE_URL + endpoints.dataCars + `/${id}`, data);
}
async function deleteCar(id) {
  return await api.del(BASE_URL + endpoints.dataCars + `/${id}`);
}
async function getSpecific(query) {
  return await api.get(BASE_URL + endpoints.getSpecificCar(query));
}
export const dataService = {
  getAllCars,
  createCar,
  detailsCar,
  updateCar,
  deleteCar,
  getSpecific,
};
