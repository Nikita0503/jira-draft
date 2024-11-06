import useProjects from '@hooks/useProjects';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectCreatorPage.module.css';

const ProjectCreatorPage = () => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const { loading, createProject } = useProjects();

  const navigate = useNavigate();

  const createNewProject = React.useCallback(() => {
    createProject(title, description, goToProjects);
  }, [title, description]);

  const goToProjects = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Create New Project</span>
      <div className={styles.content}>
        <TextField
          className={styles.textField}
          label="Title"
          variant="filled"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Desription"
          variant="filled"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button
          onClick={createNewProject}
          className={styles.button}
          variant="contained"
          disabled={loading}
        >
          Create New Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCreatorPage;
