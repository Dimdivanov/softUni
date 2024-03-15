const URL = 'http://localhost:3030/jsonstore/collections/books';
import { dataApi } from '../requester.js';

async function getAllOption() {
  return await dataApi.get(URL);
}

async function postNewOption(data) {
  return await dataApi.post(URL, data);
}
async function putNewOption(data) {
  return await dataApi.put(URL, data);
}
export const dataService = { getAllOption, postNewOption, putNewOption };
