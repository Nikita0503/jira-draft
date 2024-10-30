import axiosInstance from './axios';

export const fetchProjectsApi = async () => {
  const res = await axiosInstance.get('/projects');
  return res.data;
};
