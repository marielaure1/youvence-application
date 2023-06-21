import axios from 'axios';

axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["Accept"] = "application/json";

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export default {
    login : async (data) => api.post("/auth/login", data).then((r) => { console.log(r); return r; }).catch((error) => { console.log(error); return error.response;}) ,
    register : async (data) => api.post("/auth/register", data).then((r) => { return r}).catch((error) => error.response) ,
} 
