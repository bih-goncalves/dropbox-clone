import axios from 'axios';

const api = axios.create({
    baseURL : 'https://db01-back.herokuapp.com',
})

export default api;
