import TaskList from '@components/lists/TaskList';
import UsersInProjectPicker from '@components/pickers/UsersInProjectPicker';
import NotFoundStub from '@components/stubs/NotFoundStub';
import useIsAdmin from '@hooks/useIsAdmin';
import useProject from '@hooks/useProject';
import useProjects from '@hooks/useProjects';
import useTasks from '@hooks/useTasks';
import { IProject } from '@interfaces';
import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProjectDetailsPage.module.css';

interface IProps {
  projectInfo: IProject;
}

const ProjectDetailsPage = ({ projectInfo }: IProps) => {
  const { projectId } = useParams();

  const { isAdmin } = useIsAdmin();

  const { deleteProject } = useProjects();
  const { tasks, error, loading, fetchTasks } = useTasks(parseInt(projectId!));

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const navigate = useNavigate();

  const deleteCurrentProject = React.useCallback(() => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      deleteProject(parseInt(projectId!), goToProjects);
    }
  }, [projectId]);

  const goToProjectEditor = React.useCallback(() => {
    navigate(`/projects/edit/${projectId}`);
  }, [projectId]);

  const goToTaskCreator = React.useCallback(() => {
    navigate(`/projects/${projectId}/tasks/create`);
  }, [projectId]);

  const goToProjects = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{projectInfo?.title}</span>
      <div className={styles.content}>
        <div className={styles.buttonsContainer}>
          <UsersInProjectPicker
            projectId={parseInt(projectId!)}
            usersInProject={projectInfo?.users ?? []}
          />
          <Button
            disabled={!isAdmin}
            onClick={goToTaskCreator}
            className={styles.button}
            variant="contained"
          >
            Create Task
          </Button>
          <Button
            disabled={!isAdmin}
            onClick={goToProjectEditor}
            className={styles.button}
            variant="contained"
          >
            Edit Project
          </Button>
          <Button
            disabled={!isAdmin}
            onClick={deleteCurrentProject}
            className={styles.button}
            variant="outlined"
            color="error"
          >
            Delete Project
          </Button>
        </div>
        <TaskList tasks={tasks} error={error} loading={loading} />
      </div>
    </div>
  );
};

const ProjectDetailsHOC = () => {
  const { projectId } = useParams();

  const { project, error, loading } = useProject(projectId);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error || !project) {
    return (
      <NotFoundStub text="Something went wrong. Probably project was not found" />
    );
  }

  return <ProjectDetailsPage projectInfo={project} />;
};

export default ProjectDetailsHOC;
