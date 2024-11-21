import useProjects from '@hooks/useProjects';
import { IProject } from '@interfaces';
import { Button, TextField } from '@mui/material';
import { projectInfoSelector } from '@selectors/projectSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
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
          disabled={loading}
        >
          Update Project
        </Button>
      </div>
    </div>
  );
};

const ProjectEditorHOC = () => {
  const { projectId } = useParams();

  const projectInfo = useSelector<TRootState, IProject | undefined>(
    (state: TRootState) => projectInfoSelector(parseInt(projectId!))(state)
  );

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!projectInfo) {
      navigate(-1);
    }
  }, [projectInfo]);

  if (!projectInfo) {
    return <div />;
  }

  return (
    <ProjectEditorPage
      projectId={projectInfo.id}
      currentTitle={projectInfo.title}
      currentDescription={projectInfo.description}
    />
  );
};

export default ProjectEditorHOC;
