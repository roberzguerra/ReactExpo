import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Authorization': "token 4cbe8fac400ff6eb51a88420e30b14fc08b645a6",
    }
});

export default api;