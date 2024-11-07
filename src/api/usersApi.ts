import axiosInstance from './axios';

export const fetchUsersApi = async () => {
  const res = await axiosInstance.get('/users');
  return res.data;
};
