import ProjectList from '@components/lists/ProjectList';
import useIsAdmin from '@hooks/useIsAdmin';
import useProjects from '@hooks/useProjects';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  const { isAdmin } = useIsAdmin();
  const { projects, error, loading, fetchProjects } = useProjects();

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const navigate = useNavigate();

  const goToProjectCreator = React.useCallback(() => {
    navigate('/projects/create');
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Projects</span>
      <div className={styles.content}>
        <div className={styles.buttonsContainer}>
          <Button
            disabled={!isAdmin}
            onClick={goToProjectCreator}
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
