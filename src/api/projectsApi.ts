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

export const updateProjectApi = async (
  projectId: number,
  title: string,
  description: string
) => {
  const res = await axiosInstance.put(`/projects/${projectId}`, {
    title: title,
    description: description,
  });
  return res.data;
};

export const deleteProjectApi = async (projectId: number) => {
  const res = await axiosInstance.delete(`/projects/${projectId}`);
  return res.data;
};

export const addUserToProjectApi = async (
  projectId: number,
  userId: number
) => {
  const res = await axiosInstance.post(`/projects/${projectId}/users`, {
    userId: userId,
  });
  return res.data;
};

export const removeUserFromProjectApi = async (
  projectId: number,
  userId: number
) => {
  const res = await axiosInstance.delete(`/projects/${projectId}/users`, {
    data: {
      userId: userId,
    },
  });
  return res.data;
};
