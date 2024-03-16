import { post, get } from './requester.js';

const endPoints = {
  register: 'users/register',
  login: 'users/login',
  logout: 'users/logout',
};

async function register(data) {
  return await post(endPoints.register, data);
  //time for creating requester
}
async function login(data) {
  return await post(endPoints.login, data);
}
async function logout() {
  return await get(endPoints.logout);
}
export { register, login, logout };
