import axiosInstance from './axios';

export const fetchTypesApi = async () => {
  const res = await axiosInstance.get('/types');
  return res.data;
};
