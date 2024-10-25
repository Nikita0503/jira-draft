import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Project from '../../components/Project';
import { IProject } from '../../interfaces';
import styles from './ProjectsPage.module.css';

const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'Project title 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tasksCount: 12,
    users: [
      {
        id: 1,
        name: 'User Name',
        email: 'user@email.com',
        role: 'ADMIN',
      },
    ],
  },
  {
    id: 2,
    title: 'Project title 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tasksCount: 15,
    users: [
      {
        id: 1,
        name: 'User Name',
        email: 'user@email.com',
        role: 'ADMIN',
      },
      {
        id: 2,
        name: 'User Name',
        email: 'user@email.com',
        role: 'ADMIN',
      },
    ],
  },
];

const ProjectsPage = () => {
  const navigate = useNavigate();

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
        {PROJECTS.map((project: IProject) => {
          return (
            <div key={project.id} className={styles.projectContainer}>
              <Project project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
