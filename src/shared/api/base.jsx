import axios from 'axios';

export const BASE_URL = 'https://random-word-api.herokuapp.com/word';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
