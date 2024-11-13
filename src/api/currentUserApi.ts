import axiosInstance from './axios';

export const fetchCurrentUserApi = async () => {
  const res = await axiosInstance.post('/users/me');
  return res.data;
};
