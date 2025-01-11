import axiosInstance from './axios';

export const fetchCommentApi = async (
  projectId: number,
  taskId: number,
  commentId: number
) => {
  const res = await axiosInstance.get(
    `/projects/${projectId}/tasks/${taskId}/comments/${commentId}`
  );
  return res.data;
};

export const fetchCommentsApi = async (projectId: number, taskId: number) => {
  const res = await axiosInstance.get(
    `/projects/${projectId}/tasks/${taskId}/comments`
  );
  return res.data;
};

export const createCommentApi = async (
  projectId: number,
  taskId: number,
  message: string,
  files?: File[]
) => {
  const formData = new FormData();
  formData.append('message', message);
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.post(
    `/projects/${projectId}/tasks/${taskId}/comments`,
    formData
  );
  return res.data;
};

export const updateCommentApi = async (
  projectId: number,
  taskId: number,
  commentId: number,
  message: string,
  files?: File[]
) => {
  const formData = new FormData();
  formData.append('message', message);
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.put(
    `/projects/${projectId}/tasks/${taskId}/comments/${commentId}`,
    formData
  );
  return res.data;
};

export const deleteCommentApi = async (
  projectId: number,
  taskId: number,
  commentId: number
) => {
  const res = await axiosInstance.delete(
    `/projects/${projectId}/tasks/${taskId}/comments/${commentId}`
  );
  return res.data;
};