import * as request from '../api/requester';

const BASE_URL = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    const games = Object.values(result);
    return games;
};
