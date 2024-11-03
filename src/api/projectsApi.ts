import axiosInstance from './axios';

export const fetchProjectsApi = async () => {
  const res = await axiosInstance.get('/projects');
  return res.data;
};

export const createProjectApi = async (title: string, description: string) => {
  const res = await axiosInstance.post('/projects', {
    title: title,
    description: description,
  });
  return res.data;
};
