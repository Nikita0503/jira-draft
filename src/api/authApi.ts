import axiosInstance from './axios';

export const signInApi = async (email: string, password: string) => {
  const res = await axiosInstance.post('/users/login', {
    email: email,
    password: password,
  });
  return res.data;
};
