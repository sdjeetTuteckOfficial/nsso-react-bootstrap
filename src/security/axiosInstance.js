import axios from 'axios';

const ENV = window.location.hostname;
let baseURL = '';

switch (ENV) {
  case 'localhost':
    baseURL = `nsso-secured/module/`;
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
    const token = 1234;
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
