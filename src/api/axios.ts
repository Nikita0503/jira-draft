import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import store from '../store';

const axiosInstance = axios.create({
  baseURL: 'https://nodejs-jira-pet-project.onrender.com/api',
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = store.getState().auth.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
