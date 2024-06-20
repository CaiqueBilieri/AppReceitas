import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.3:180/'
})

export default api;

/* json-server --watch -d 180 --host 192.168.x.xxx db.json

ou

json-server --watch -p 180 --host 192.168.x.xxx db.json */