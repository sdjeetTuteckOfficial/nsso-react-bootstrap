import axios from 'axios';

const ENV = window.location.hostname;
let baseURL = '';

switch (ENV) {
  case 'localhost':
    baseURL = `http://10.48.16.236:83/api`;
    // baseURL = `${NetworkSettings.auth.local.host}${NetworkSettings.auth.local.module}`;
    break;
  default:
    throw new Error('Unknown environment');
}

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
