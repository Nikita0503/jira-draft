import TaskList from '@components/lists/TaskList';
import UsersInProjectPicker from '@components/pickers/UsersInProjectPicker';
import useProjects from '@hooks/useProjects';
import useTasks from '@hooks/useTasks';
import { IProject } from '@interfaces';
import { Button } from '@mui/material';
import { projectInfoSelector } from '@selectors/projectSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProjectDetailsPage.module.css';

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const projectInfo = useSelector<TRootState, IProject | undefined>(
    (state: TRootState) => projectInfoSelector(parseInt(projectId!))(state)
  );

  const navigate = useNavigate();

  const { deleteProject } = useProjects();
  const { tasks, error, loading, fetchTasks } = useTasks(parseInt(projectId!));

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const showModalUsersInProject = React.useCallback(() => {}, []);

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
          <UsersInProjectPicker />
          <Button
            onClick={goToTaskCreator}
            className={styles.button}
            variant="contained"
          >
            Create Task
          </Button>
          <Button
            onClick={goToProjectEditor}
            className={styles.button}
            variant="contained"
          >
            Edit Project
          </Button>
          <Button
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

export default ProjectDetailsPage;
