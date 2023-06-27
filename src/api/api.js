import axios from 'axios';

const token = localStorage.getItem("token")

const URL = "http://localhost:3001/api"

axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["Accept"] = "application/json";

const auth = axios.create({
  baseURL: `${URL}/auth`
});

const plans = axios.create({
  baseURL: `${URL}/plans`
});

const subscriptions = axios.create({
  baseURL: `${URL}/subscriptions`
});

const post = axios.create({
  baseURL: `${URL}/posts`
});

const users = axios.create({
  baseURL: `${URL}/users`
});

const collections = axios.create({ baseURL: `${URL}/collections` });

export default {
    login : async (data) => auth.post("/login", data).then((r) => { console.log(r); return r; }).catch((error) => { console.log(error); return error.response;}) ,
    register : async (data) => auth.post("/register", data).then((r) => { return r}).catch((error) => error.response) ,
    me : async () => auth.get(`/me`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
    meUpdate : async (data, id) => auth.post(`/me-update/${id}`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,

    updatePassword: async (data, id) => users.put(`/${id}/password`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
    
    // Plans
    getPlans : async () => plans.get(`/published`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
    getOnePlan : async (id) => plans.get(`/${id}`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,

    // Subscriptions
    checkout : async (data) => subscriptions.post(`/checkout`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
    createSubscriptionStripe : async (data) => subscriptions.post(`/create-checkout-session`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
    createPortalSession : async (data) => subscriptions.post(`/create-portal-session`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
    // webHook : async (data) => subscriptions.post(`/webhook`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,

     // Articles
     getPosts : async () => post.get(`/client`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
     getOnePost : async (id) => post.get(`/client/${id}`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,

      // Collections
      getCollections : async () => collections.get(`/client`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
      getOneCollection : async (id) => collections.get(`/client/${id}`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r ).catch((error) => error.response) ,
} 
