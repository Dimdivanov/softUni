import { api } from '../requester.js';

const BASE_URL = 'http://localhost:3030';

const endPoints = {
  allTeams: '/data/teams',
  allMembers: '/data/members?where=status%3D%22member%22',
};

async function getAllTeams() {
  return await api.get(BASE_URL + endPoints.allTeams);
}
async function getAllMembers() {
  return await api.get(BASE_URL + endPoints.allMembers);
}
