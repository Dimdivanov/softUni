const URL = 'http://localhost:3030/jsonstore/advanced/table';
import { dataApi } from '../requester.js';

async function getAllOption() {
  return await dataApi.get(URL);
}

async function postNewOption(data) {
  return await dataApi.post(URL, data);
}

export const dataService = { getAllOption, postNewOption };
