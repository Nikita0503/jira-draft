import axiosInstance from './axios';

export const fetchStatusesApi = async () => {
  const res = await axiosInstance.get('/statuses');
  return res.data;
};
