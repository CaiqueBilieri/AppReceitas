import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.19:180/'
})

export default api;