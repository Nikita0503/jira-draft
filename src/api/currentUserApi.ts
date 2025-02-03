import axiosInstance from './axios';

export const fetchCurrentUserApi = async () => {
  const res = await axiosInstance.post('/users/me');
  return res.data;
};

export const updateCurrentUserApi = async (
  name: string,
  avatar?: File | string | undefined
) => {
  const formData = new FormData();
  formData.append('name', name);
  if (avatar instanceof File) {
    formData.append('avatar', avatar);
  }
  const res = await axiosInstance.put(`/users`, formData);
  return res.data;
};

export const deleteCurrentUserAvatarApi = async () => {
  const res = await axiosInstance.delete('/users/avatar');
  return res.data;
};
