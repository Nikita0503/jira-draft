import { fetchTaskApi } from '@api/tasksApi';
import { ITask } from '@interfaces';
import React from 'react';

const useTask = (projectId: string | undefined, taskId: string | undefined) => {
  const [task, setTask] = React.useState<ITask | undefined>(undefined);
  const [error, setError] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchTaskData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchTaskApi(
        parseInt(projectId!),
        parseInt(taskId!)
      );
      if (response.task) {
        setTask(response.task);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [projectId, taskId]);

  React.useEffect(() => {
    fetchTaskData();
  }, [projectId, taskId]);

  return { task, error, loading };
};

export default useTask;
