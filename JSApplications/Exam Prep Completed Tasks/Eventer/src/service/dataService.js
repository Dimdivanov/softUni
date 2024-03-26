import { api } from '../requester.js';
//step 5 edit url's here
const BASE_URL = 'http://localhost:3030';

const endpoints = {
  allEvents: '/data/events?sortBy=_createdOn%20desc',
  events: '/data/events',
  going: '/data/going',
  getAllGoing: (eventId) => `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
  userGoing: (eventId, userId) =>
    `/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

//to display all events
async function getAllEvents() {
  return await api.get(BASE_URL + endpoints.allEvents);
}
//to create event in add event menu
async function createEvent(data) {
  return await api.post(BASE_URL + endpoints.events, data);
}
//to display details of an event
async function detailsEvent(id) {
  return await api.get(BASE_URL + endpoints.events + `/${id}`);
}
//edit event or update
async function updateEvent(id, data) {
  return await api.put(BASE_URL + endpoints.events + `/${id}`, data);
}
async function deleteEvent(id) {
  return await api.del(BASE_URL + endpoints.events + `/${id}`);
}
//TODO sendLikes, getLikes, likesPerUser
async function going(eventId) {
  return await api.post(BASE_URL + endpoints.going, { eventId });
}
async function getTotalGoing(eventId) {
  return await api.get(BASE_URL + endpoints.getAllGoing(eventId));
}
async function didUserGoing(eventId, userId) {
  return await api.get(BASE_URL + endpoints.userGoing(eventId, userId));
}
export const dataService = {
  getAllEvents,
  createEvent,
  detailsEvent,
  updateEvent,
  deleteEvent,
  going,
  getTotalGoing,
  didUserGoing,
};
