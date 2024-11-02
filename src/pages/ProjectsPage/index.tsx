import { fetchProjectsAsyncAction } from '@actions/projectsActions';
import ProjectListItem from '@components/listItems/ProjectListItem';
import { IProject } from '@interfaces';
import { Button } from '@mui/material';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();

  const projects = useSelector<TRootState, IProject[]>(
    (state: TRootState) => state.projects.projects
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.projects.loading
  );

  React.useEffect(() => {
    dispatch(fetchProjectsAsyncAction());
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
        {projects.map((project: IProject) => {
          return (
            <div key={project.id} className={styles.projectContainer}>
              <ProjectListItem project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
