import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

const endPoints = {
  login: '/users/login',
  register: '/users/register',
  logout: '/users/logout',
};

async function login(data) {
  return await api.post(BASE_URL + endPoints.login, data);
}
async function register(data) {
  return await api.post(BASE_URL + endPoints.register, data);
}

async function logout() {
  return await api.get(BASE_URL + endPoints.logout);
}

export const userService = {
  login,
  register,
  logout,
};
