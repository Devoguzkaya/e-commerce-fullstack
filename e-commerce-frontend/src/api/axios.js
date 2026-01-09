import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
