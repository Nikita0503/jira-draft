import NotFoundStub from '@components/stubs/NotFoundStub';
import useProject from '@hooks/useProject';
import useProjects from '@hooks/useProjects';
import { Button, CircularProgress, TextField } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProjectEditorPage.module.css';

interface IProps {
  projectId: number;
  currentTitle: string;
  currentDescription: string;
}

const ProjectEditorPage = ({
  projectId,
  currentTitle,
  currentDescription,
}: IProps) => {
  const [title, setTitle] = React.useState<string>(currentTitle);
  const [descripton, setDescription] =
    React.useState<string>(currentDescription);

  const { loading, updateProject } = useProjects();

  const navigate = useNavigate();

  const updateCurrentProject = React.useCallback(() => {
    updateProject(projectId, title, descripton, goToProjects);
  }, [projectId, title, descripton]);

  const goToProjects = React.useCallback(() => {
    navigate(-1);
  }, []);

  const isValid = React.useMemo<boolean>(() => {
    return !!title.trim();
  }, [title]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Update Project</span>
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
          value={descripton}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button
          onClick={updateCurrentProject}
          className={styles.button}
          variant="contained"
          disabled={loading || !isValid}
        >
          Update Project
        </Button>
      </div>
    </div>
  );
};

const ProjectEditorHOC = () => {
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

  return (
    <ProjectEditorPage
      projectId={parseInt(projectId!)}
      currentTitle={project.title}
      currentDescription={project.description}
    />
  );
};

export default ProjectEditorHOC;
