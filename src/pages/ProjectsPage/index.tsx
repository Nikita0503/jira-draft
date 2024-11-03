import ProjectList from '@components/lists/ProjectList';
import useProjects from '@hooks/useProjects';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  const navigate = useNavigate();

  const { projects, error, loading, fetchProjects } = useProjects();

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const goToProjectEditor = React.useCallback(() => {
    navigate('/projects/create');
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Projects</span>
      <div className={styles.content}>
        <div className={styles.buttonsContainer}>
          <Button
            onClick={goToProjectEditor}
            className={styles.button}
            variant="contained"
          >
            Create Project
          </Button>
        </div>
        <ProjectList projects={projects} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default ProjectsPage;
