import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

// Request interceptor if needed later
api.interceptors.request.use(
    (config) => {
        // You can add auth headers here if token exists
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
