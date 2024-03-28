import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

const endpoints = {
  tvShowsSpecifics: (movieId) => `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`,
  tvShows: '/data/movies',
  sendLike: '/data/likes',
  tvShowUserSpecific: (movieId, userId) =>
    `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,
};

async function getAllShows() {
  return await api.get(BASE_URL + endpoints.tvShows);
}
async function getDetailsShows(id) {
  return await api.get(BASE_URL + endpoints.tvShows + `/${id}`);
}

async function createShows(data) {
  return await api.post(BASE_URL + endpoints.tvShows, data);
}

async function updateShows(id, data) {
  return await api.put(BASE_URL + endpoints.tvShows + `/${id}`, data);
}
async function deleteShows(id) {
  return await api.del(BASE_URL + endpoints.tvShows + `/${id}`);
}
// posts likes
async function sendLike(movieId) {
  return await api.post(BASE_URL + endpoints.sendLike, { movieId });
}
async function deleteLikes(id) {
  return await api.del(BASE_URL + endpoints.sendLike + `/${id}`);
}

async function getNumberOfLikes(movieId) {
  //is this code viable will the answer of tvshowspecific concat with base url ?
  return await api.get(BASE_URL + endpoints.tvShowsSpecifics(movieId));
}
async function didUserLiked(movieId, userId) {
  //is this code viable will the answer of tvshowspecific concat with base url ?
  return await api.get(BASE_URL + endpoints.tvShowUserSpecific(movieId, userId));
}
export const dataService = {
  getAllShows,
  getDetailsShows,
  createShows,
  updateShows,
  deleteShows,
  sendLike,
  deleteLikes,
  getNumberOfLikes,
  didUserLiked,
};
