import axiosInstance from './axios';

export const fetchTasksApi = async (projectId: number) => {
  const res = await axiosInstance.get(`/projects/${projectId}/tasks`);
  return res.data;
};

export const createTaskApi = async (
  projectId: number,
  title: string,
  description: string,
  statusId: number,
  typeId: number,
  userId: number,
  timeAllotted: number,
  files?: File[]
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('statusId', statusId.toString());
  formData.append('typeId', typeId.toString());
  formData.append('userId', userId.toString());
  formData.append('timeAllotted', timeAllotted.toString());
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.post(
    `/projects/${projectId}/tasks`,
    formData
  );
  return res.data;
};

export const updateTaskApi = async (
  projectId: number,
  taskId: number,
  title: string,
  description: string,
  statusId: number,
  typeId: number,
  userId: number,
  timeAllotted: number,
  files?: File[]
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('statusId', statusId.toString());
  formData.append('typeId', typeId.toString());
  formData.append('userId', userId.toString());
  formData.append('timeAllotted', timeAllotted.toString());
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.put(
    `/projects/${projectId}/tasks/${taskId}`,
    formData
  );
  return res.data;
};
