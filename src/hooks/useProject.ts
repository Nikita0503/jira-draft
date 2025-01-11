import { fetchProjectApi } from '@api/projectsApi';
import { IProject } from '@interfaces';
import React from 'react';

const useProject = (projectId: string | undefined) => {
  const [project, setProject] = React.useState<IProject | undefined>(undefined);
  const [error, setError] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchProjectData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchProjectApi(parseInt(projectId!));
      if (response.project) {
        setProject(response.project);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  React.useEffect(() => {
    fetchProjectData();
  }, [projectId]);

  return { project, error, loading };
};

export default useProject;
