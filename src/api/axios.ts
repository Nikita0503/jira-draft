import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://nodejs-jira-pet-project.onrender.com/api',
});

export default axiosInstance;
